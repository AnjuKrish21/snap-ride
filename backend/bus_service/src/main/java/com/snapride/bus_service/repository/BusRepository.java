package com.snapride.bus_service.repository;

import com.snapride.bus_service.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BusRepository extends JpaRepository<Bus, Long> {
    List<Bus> findAllByOrderByIdDesc(); // for id

    @Query("SELECT b FROM Bus b")
    List<Bus> findAllDistinct();

}