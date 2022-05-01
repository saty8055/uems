package com.hss.uems.service.services;

import com.hss.uems.config.exception.DataValidityException;
import com.hss.uems.config.exception.NoSuchPropertyException;
import com.hss.uems.entity.Booking;
import com.hss.uems.entity.RestaurantTable;
import org.springframework.data.domain.Page;

import java.util.Date;
import java.util.List;

public interface Service {
    Page<Booking> findBookings(Integer pageNumber, Integer pageSize, String sortDirection, String sortField);

    List<RestaurantTable> findAvailable(Date from, Date to) throws NoSuchPropertyException;

    Booking add(Booking booking) throws DataValidityException;

    Booking cancel(String bookingId) throws DataValidityException, NoSuchPropertyException;
}
