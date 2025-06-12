package com.snapride.bus_service.dto;

import com.snapride.bus_service.entity.BusStops;
import com.snapride.bus_service.entity.Locations;

public class BusStopsDTO {
    private Long id;
    private Long busId;
    private Locations stop;

    public BusStopsDTO(BusStops stop) {
        this.id = stop.getId();
        this.busId = stop.getBus().getId();
        this.stop = stop.getStop();
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public Locations getStop() {
        return stop;
    }

    public void setStop(Locations stop) {
        this.stop = stop;
    }


    public void setBusId(Long busId) {
        this.busId = busId;
    }

    public Long getBusId() {
        return busId;
    }
}
