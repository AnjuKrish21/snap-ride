package com.snapride.bus_service.repository;

import com.snapride.bus_service.entity.Bus;
import com.snapride.bus_service.entity.BusStops;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BusStopsRepository extends JpaRepository<BusStops, Long> {
    List<BusStops> findAllByOrderByIdDesc(); // for id

}