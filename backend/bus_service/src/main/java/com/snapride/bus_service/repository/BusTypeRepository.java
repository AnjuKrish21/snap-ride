package com.snapride.bus_service.repository;

import com.snapride.bus_service.entity.BusType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BusTypeRepository extends JpaRepository<BusType, Long> {
    List<BusType> findAllByOrderByIdDesc(); // for id

}