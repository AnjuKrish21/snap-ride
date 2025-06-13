package com.snapride.bus_service.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
public class BookingPassenger {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;
    private Long mobile;
    private String email;

    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public void setMobile(Long mobile) {
        this.mobile = mobile;
    }

    public String getFullName() {
        return fullName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getEmail() {
        return email;
    }

    public Long getMobile() {
        return mobile;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }
}
