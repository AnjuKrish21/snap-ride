package com.snapride.bus_service.controller;

import com.snapride.bus_service.entity.Bus;
import com.snapride.bus_service.repository.BusRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/buses")
public class BusController {
    private final BusRepository busRepository;
    public BusController(BusRepository busRepository) {
        this.busRepository = busRepository;
    }

    @GetMapping
    public List<Bus> getAllBuses() {
        return busRepository.findAllByOrderByIdDesc();
    }

    @PostMapping
    public Bus createBus(@RequestBody Bus bus) {
        System.out.println("Received bus data: " + bus.getName());
        System.out.println("Received bus data: " + bus.getId());// Simple console log
        return busRepository.save(bus);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
        return busRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}