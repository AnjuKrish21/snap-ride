package com.snapride.bus_service.controller;

import com.snapride.bus_service.entity.BusType;
import com.snapride.bus_service.repository.BusRepository;
import com.snapride.bus_service.repository.BusTypeRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/bus-types")
public class BusTypeController {
    private final BusTypeRepository busTypeRepository;
    public BusTypeController(BusTypeRepository busTypeRepository) {
        this.busTypeRepository = busTypeRepository;
    }

    @GetMapping
    public List<BusType> getAllBusTypes() {
        return busTypeRepository.findAll();
    }
}
