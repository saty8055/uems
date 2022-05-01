package com.hss.uems.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.hss.uems.config.constants.Library;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;

@Entity
public class RestaurantTable {

    public RestaurantTable() {}

    public RestaurantTable(String restaurantName, Integer tableNum, Integer capacity, Double price){
        this.restaurantName = restaurantName;
        this.capacity = capacity;
        this.price = price;
    }

    @Id
    @GeneratedValue(generator = Library.UUID)
    @GenericGenerator(name = Library.UUID, strategy = Library.UUID_2)
    private String tableId;

    private String restaurantName;

    private Integer capacity, tableNum;

    private Double price;

    @OneToMany(mappedBy = "table", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JsonIgnoreProperties({Library.HIBERNATE_LAZY_INITIALIZER, Library.HANDLER })
    @JsonIgnore
    public List<Booking> bookings;

    public String getTableId() {
        return tableId;
    }

    public void setTableId(String tableId) {
        this.tableId = tableId;
    }

    public String getRestaurantName() {
        return restaurantName;
    }

    public void setRestaurantName(String restaurantName) {
        this.restaurantName = restaurantName;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getTableNum() {
        return tableNum;
    }

    public void setTableNum(Integer tableNum) {
        this.tableNum = tableNum;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }
}
