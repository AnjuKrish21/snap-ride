package com.snapride.bus_service.repository;

import com.snapride.bus_service.dto.ResponseBookingDTO;
import com.snapride.bus_service.entity.Booking;
import com.snapride.bus_service.entity.Bus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.lang.reflect.Array;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findAllByBusId(Long id); // for id

}