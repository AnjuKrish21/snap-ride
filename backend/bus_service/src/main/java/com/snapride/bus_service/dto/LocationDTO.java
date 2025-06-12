package com.snapride.bus_service.dto;

import com.snapride.bus_service.entity.Locations;

public class LocationDTO {
    private Long id;
    private String name;


    public LocationDTO(Locations location) {
        this.id = location.getId();
        this.name = location.getName();
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
