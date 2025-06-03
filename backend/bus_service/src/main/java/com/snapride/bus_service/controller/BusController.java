package com.snapride.bus_service.controller;

import com.snapride.bus_service.entity.Bus;
import com.snapride.bus_service.repository.BusRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

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
        return busRepository.save(bus);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
        return busRepository.findById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
}