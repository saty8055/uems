package com.hss.uems.entity;

import com.hss.uems.config.constants.Library;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Booking extends BaseEntity{

    @Id
    @GeneratedValue(generator = Library.UUID)
    @GenericGenerator(name = Library.UUID, strategy = Library.UUID_2)
    private String bookingId;

    private Date bookingFrom, bookingTo;

    private Boolean cancelled;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = Library.USER_ID)
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "tableId")
    private RestaurantTable table;

    public String getBookingId() {
        return bookingId;
    }

    public void setBookingId(String bookingId) {
        this.bookingId = bookingId;
    }

    public Date getBookingFrom() {
        return bookingFrom;
    }

    public void setBookingFrom(Date bookingFrom) {
        this.bookingFrom = bookingFrom;
    }

    public Date getBookingTo() {
        return bookingTo;
    }

    public void setBookingTo(Date bookingTo) {
        this.bookingTo = bookingTo;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public RestaurantTable getTable() {
        return table;
    }

    public void setTable(RestaurantTable table) {
        this.table = table;
    }

    public Boolean getCancelled() {
        return cancelled;
    }

    public void setCancelled(Boolean cancelled) {
        this.cancelled = cancelled;
    }
}
