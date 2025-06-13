package com.snapride.bus_service.dto;

import lombok.Data;

import java.util.List;

public class ResponseBookingDTO {

    private Long bookingId;
    private Long busId;
    private int noOfPassengers;
    private List<PassengerResponseDTO> passengers;

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public void setPassengers(List<PassengerResponseDTO> passengers) {
        this.passengers = passengers;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getBookingId() {
        return bookingId;
    }

    public void setBookingId(Long bookingId) {
        this.bookingId = bookingId;
    }

    public List<PassengerResponseDTO> getPassengers() {
        return passengers;
    }
}
