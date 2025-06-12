package com.snapride.bus_service.controller;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.snapride.bus_service.dto.BusDTO;
import com.snapride.bus_service.dto.BusStopsDTO;
import com.snapride.bus_service.dto.CreateBusDTO;
import com.snapride.bus_service.dto.LocationDTO;
import com.snapride.bus_service.entity.Bus;
import com.snapride.bus_service.entity.BusStops;
import com.snapride.bus_service.entity.Locations;
import com.snapride.bus_service.repository.BusRepository;
import com.snapride.bus_service.repository.BusStopsRepository;
import com.snapride.bus_service.repository.LocationsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
@RequestMapping("/api/buses")
public class BusController {
    private final BusRepository busRepository;
    private final LocationsRepository locationsRepository;
    private final BusStopsRepository busStopsRepository;

    public BusController(BusRepository busRepository, LocationsRepository locationsRepository, BusStopsRepository busStopsRepository) {
        this.busRepository = busRepository;
        this.locationsRepository = locationsRepository;
        this.busStopsRepository = busStopsRepository;
    }

    @GetMapping
    public List<BusDTO> getAllBuses() {
//        return busRepository.findAllDistinct();

        return busRepository.findAll().stream().map(BusDTO::new).collect(Collectors.toList());
    }

    @PostMapping
    public Bus createBus(@RequestBody CreateBusDTO createBusDTO) {
        Bus bus = new Bus();
        bus.setName(createBusDTO.getName());
        bus.setType(createBusDTO.getType());
        bus.setRegistrationNumber(createBusDTO.getRegistrationNumber());
        bus.setArrivalTime(createBusDTO.getArrivalTime());
        bus.setDepartureTime(createBusDTO.getDepartureTime());
        bus.setCapacity(createBusDTO.getCapacity());
        bus.setFromLocation(createBusDTO.getFromLocation());
        bus.setToLocation(createBusDTO.getToLocation());

        Bus savedBus = busRepository.save(bus);

        List<BusStops> busStopsList = createBusDTO.getStops().stream().map(stop -> {
            BusStops bs = new BusStops();
            bs.setBus(savedBus);
            bs.setStop(stop);
            System.out.println(bs.getStop().getName());
            return bs;
        }).collect(Collectors.toList());

        busStopsRepository.saveAll(busStopsList);
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Bus> getBusById(@PathVariable Long id) {
        return busRepository.findById(id).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }
}