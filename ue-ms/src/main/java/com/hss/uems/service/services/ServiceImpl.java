package com.hss.uems.service.services;

import com.google.common.collect.Lists;
import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.NoSuchPropertyException;
import com.hss.uems.entity.Booking;
import com.hss.uems.entity.RestaurantTable;
import com.hss.uems.entity.User;
import com.hss.uems.repo.BookingRepo;
import com.hss.uems.repo.TableRepo;
import com.hss.uems.repo.UserRepo;
import com.hss.uems.service.common.utils.UtilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import javax.annotation.PostConstruct;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@org.springframework.stereotype.Service
public class ServiceImpl implements Service {

    @Autowired
    private BookingRepo bookingRepo;

    @Autowired
    private TableRepo tableRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UtilService utilService;

    @PostConstruct
    public void init(){
        if(tableRepo.findAll().isEmpty())
            tableRepo.saveAll(this.getDefaults());
    }

    @Override
    public Page<Booking> findBookings(Integer pageNumber, Integer pageSize, String sortDirection, String sortField) {

        String sortOptions = "bookingId, bookingFrom, bookingTo, createdAt, updatedAt";

        if (!sortOptions.contains(sortField))
            sortField = "createdAt";

        Pageable pageable = PageRequest.of(pageNumber, pageSize, utilService.getSort(sortField, sortDirection));

        User user = userRepo.findById(utilService.user().getUserId()).get();
        Page<Booking> records = bookingRepo.findByUser(user, pageable);

        return records;

    }

    @Override
    public List<RestaurantTable> findAvailable(Date from, Date to) throws NoSuchPropertyException {
        List<RestaurantTable> bookedTables = bookingRepo.findAll().stream().filter(booking -> (booking.getCancelled() || this.isAvailable(from, to, booking.getBookingFrom(), booking.getBookingTo())))
                .collect(Collectors.toList()).stream().map(Booking:: getTable).collect(Collectors.toList());
        List<RestaurantTable> tables = tableRepo.findAll().stream().filter(room -> !bookedTables.contains(room)).collect(Collectors.toList());
        return tables;
    }

    @Override
    public Booking add(Booking booking) throws DataValidityException {
        User user = utilService.user();

        if(booking.getTable() == null || booking.getTable().getTableId() == null)
            throw new DataValidityException("Invalid table referenced!");


        Optional<RestaurantTable> roomLib = tableRepo.findById(booking.getTable().getTableId());

        if(!roomLib.isPresent())
            throw new DataValidityException("Invalid table referenced!");

        booking.setUser(userRepo.findById(user.getUserId()).get());
        booking.setTable(roomLib.get());
        booking.setCancelled(false);

        return bookingRepo.save(booking);

    }

    @Override
    public Booking cancel(String bookingId) throws DataValidityException, NoSuchPropertyException {
        Optional<Booking> bookingLib = bookingRepo.findById(bookingId);

        if(!bookingLib.isPresent())
            throw new NoSuchPropertyException("Invalid booking referenced!");

        Booking booking = bookingLib.get();

        booking.setUser(booking.getUser());
        booking.setTable(booking.getTable());
        booking.setCancelled(true);

        return bookingRepo.save(booking);

    }

    private boolean isAvailable(Date desiredFrom, Date desiredTo, Date bookedFrom, Date bookedTo){
        boolean flag = false;
        if(utilService.before(bookedFrom, desiredFrom)){
            if(utilService.before(bookedTo, desiredFrom))
                flag = true;
            else flag = false;
        }
        else{
            if(utilService.before(bookedFrom, desiredTo))
                flag = false;
            else
                flag = true;
        }
        return flag;
    }


    private List<RestaurantTable> getDefaults(){
        return Lists.newArrayList(
                new RestaurantTable("Restaurant -I", 1, 4, 4000.0),
                new RestaurantTable("Restaurant -II",2, 4, 4000.0),
                new RestaurantTable("Restaurant -III",3, 4, 4000.0),
                new RestaurantTable("Restaurant -IV",4, 4, 4000.0),
                new RestaurantTable("Restaurant -V",5, 4, 4000.0),
                new RestaurantTable("Restaurant -VI",6, 4, 4000.0),
                new RestaurantTable("Restaurant -VII",7, 4, 4000.0),
                new RestaurantTable("Restaurant -VIII",8, 4, 4000.0),
                new RestaurantTable("Restaurant -IX", 9, 4, 4000.0),
                new RestaurantTable("Restaurant -X",10, 4, 4000.0),
                new RestaurantTable("Restaurant -XI", 11, 4, 4000.0),
                new RestaurantTable("Restaurant -XII", 12, 4, 4000.0),
                new RestaurantTable("Restaurant -XIII", 13, 4, 4000.0),
                new RestaurantTable("Restaurant -XIV", 14, 4, 4000.0),
                new RestaurantTable("Restaurant -XV", 15, 4, 4000.0),
                new RestaurantTable("Restaurant -XVI", 16, 4, 4000.0),
                new RestaurantTable("Restaurant -XVII", 17, 4, 4000.0),
                new RestaurantTable("Restaurant -XVIII", 18, 4, 4000.0),
                new RestaurantTable("Restaurant -XIX", 19, 4, 4000.0),
                new RestaurantTable("Restaurant -XX", 20, 4, 4000.0));

    }

}
