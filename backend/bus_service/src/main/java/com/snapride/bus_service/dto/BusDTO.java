package com.snapride.bus_service.dto;

import com.snapride.bus_service.entity.Bus;
import com.snapride.bus_service.entity.BusStops;

import java.util.List;
import java.util.stream.Collectors;

public class BusDTO {
    private Long id;
    private String name;
    private String type;
    private String registrationNumber;
    private String arrivalTime;
    private Integer capacity;
    private String departureTime;
    private LocationDTO fromLocation;
    private LocationDTO toLocation;
    private List<BusStopsDTO> stops;
    private List<LocationDTO> busStops;


    public BusDTO(Bus bus) {
        this.id = bus.getId();
        this.name = bus.getName();
        this.type = bus.getType();
        this.registrationNumber = bus.getRegistrationNumber();
        this.arrivalTime = bus.getArrivalTime();
        this.departureTime = bus.getDepartureTime();
        this.capacity = bus.getCapacity();
        this.fromLocation = bus.getFromLocation() != null ? new LocationDTO(bus.getFromLocation()) : null;
        this.toLocation = bus.getToLocation() != null ? new LocationDTO(bus.getToLocation()) : null;

        this.stops = bus.getStops() != null
                ? bus.getStops().stream().map(BusStopsDTO::new).collect(Collectors.toList())
                : null;

        List<LocationDTO> busStops = bus.getStops().stream()
                .map(BusStops::getStop)         // Get Locations from BusStops
                .map(LocationDTO::new)          // Convert Locations to LocationDTO
                .toList();  // Collect into a List



    }

    public List<LocationDTO> getBusStops() {
        return busStops;
    }

    public void setBusStops(List<LocationDTO> busStops) {
        this.busStops = busStops;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }


    public Integer getCapacity() {
        return capacity;
    }

    public List<BusStopsDTO> getStops() {
        return stops;
    }

    public LocationDTO getFromLocation() {
        return fromLocation;
    }

    public LocationDTO getToLocation() {
        return toLocation;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public String getType() {
        return type;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public void setFromLocation(LocationDTO fromLocation) {
        this.fromLocation = fromLocation;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public void setStops(List<BusStopsDTO> stops) {
        this.stops = stops;
    }

    public void setToLocation(LocationDTO toLocation) {
        this.toLocation = toLocation;
    }

    public void setType(String type) {
        this.type = type;
    }
}

