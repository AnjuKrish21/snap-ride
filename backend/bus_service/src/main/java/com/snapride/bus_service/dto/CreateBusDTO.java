package com.snapride.bus_service.dto;

import com.snapride.bus_service.entity.Locations;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

import java.util.List;

public class CreateBusDTO {
    @NotBlank
    private String name;

    @NotBlank
    private String type;

    @NotBlank
    private String registrationNumber;

    @NotNull
    private Integer capacity;

    @NotBlank
    private String arrivalTime;

    @NotBlank
    private String departureTime;

    @NotNull
    private Locations fromLocation;

    @NotNull
    private Locations toLocation;

    @NotEmpty
    private List<Locations> stops;


    public void setName(@NotBlank String name) {
        this.name = name;
    }

    public @NotBlank String getName() {
        return name;
    }

    public @NotBlank String getType() {
        return type;
    }

    public @NotNull Integer getCapacity() {
        return capacity;
    }

    public @NotBlank String getRegistrationNumber() {
        return registrationNumber;
    }

    public @NotBlank String getArrivalTime() {
        return arrivalTime;
    }

    public @NotBlank String getDepartureTime() {
        return departureTime;
    }

    public void setArrivalTime(@NotBlank String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public void setCapacity(@NotNull Integer capacity) {
        this.capacity = capacity;
    }

    public void setDepartureTime(@NotBlank String departureTime) {
        this.departureTime = departureTime;
    }

    public void setRegistrationNumber(@NotBlank String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public void setType(@NotBlank String type) {
        this.type = type;
    }

    public void setFromLocationId(@NotNull Locations fromLocation) {
        this.fromLocation = fromLocation;
    }

    public @NotEmpty List<Locations> getStops() {
        return stops;
    }

    public @NotNull Locations getFromLocation() {
        return fromLocation;
    }

    public @NotNull Locations getToLocation() {
        return toLocation;
    }

    public void setStopIds(@NotEmpty List<Locations> stops) {
        this.stops = stops;
    }

    public void setToLocation(@NotNull Locations toLocation) {
        this.toLocation = toLocation;
    }
}
