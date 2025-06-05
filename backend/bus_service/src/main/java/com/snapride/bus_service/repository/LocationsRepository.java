package com.snapride.bus_service.repository;

import com.snapride.bus_service.entity.BusType;
import com.snapride.bus_service.entity.Locations;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationsRepository extends JpaRepository<Locations, Long> {
    List<Locations> findAllByOrderByIdDesc(); // for id

}