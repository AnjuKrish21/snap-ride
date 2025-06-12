package com.snapride.bus_service.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "buses")
@NoArgsConstructor
@AllArgsConstructor
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    private String registrationNumber;

    private String arrivalTime;

    private Integer capacity;

    private String departureTime;

    @ManyToOne
    @JoinColumn(name = "from_location_id")
    private Locations fromLocation;

    @ManyToOne
    @JoinColumn(name = "to_location_id")
    private Locations toLocation;

    @ManyToMany
    @JoinTable(
            name = "bus_stops",
            joinColumns = @JoinColumn(name = "bus_id"),
            inverseJoinColumns = @JoinColumn(name = "stop_id")
    )
    private List<BusStops> stops;

    public void setToLocation(Locations toLocation) {
        this.toLocation = toLocation;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public void setFromLocation(Locations fromLocation) {
        this.fromLocation = fromLocation;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setStops(List<BusStops> stops) {
        this.stops = stops;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public String getType() {
        return type;
    }

    public String getName() {
        return name;
    }

    public List<BusStops> getStops() {
        return stops;
    }

    public Locations getFromLocation() {
        return fromLocation;
    }

    public Locations getToLocation() {
        return toLocation;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}