package com.snapride.bus_service.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

public class CreateBookingDTO {

    private Long busId;

    private int noOfPassengers;

    private List<PassengerRequestDTO> passengers;

    public Long getBusId() {
        return busId;
    }

    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public int getNoOfPassengers() {
        return noOfPassengers;
    }

    public List<PassengerRequestDTO> getPassengers() {
        return passengers;
    }

    public void setNoOfPassengers(int noOfPassengers) {
        this.noOfPassengers = noOfPassengers;
    }

    public void setPassengers(List<PassengerRequestDTO> passengers) {
        this.passengers = passengers;
    }
}
