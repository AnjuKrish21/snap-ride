package com.snapride.bus_service.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long busId;

    private Integer noOfPassengers;


    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
    private List<BookingPassenger> passengers;

    public void setPassengers(List<BookingPassenger> passengers) {
        this.passengers = passengers;
    }

    public void setNoOfPassengers(Integer noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getBusId() {
        return busId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getNoOfPassengers() {
        return noOfPassengers;
    }

    public List<BookingPassenger> getPassengers() {
        return passengers;
    }
}
