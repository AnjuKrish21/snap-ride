package com.snapride.bus_service.controller;

import com.snapride.bus_service.entity.BusType;
import com.snapride.bus_service.entity.Locations;
import com.snapride.bus_service.repository.BusTypeRepository;
import com.snapride.bus_service.repository.LocationsRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:4201"})
@RequestMapping("/api/locations")
public class LocationsController {

    private final LocationsRepository locationsRepository;
    public LocationsController(LocationsRepository locationsRepository) {
        this.locationsRepository = locationsRepository;
    }

    @GetMapping
    public List<Locations> getAllLocations() {
        return this.locationsRepository.findAll();
    }
}
