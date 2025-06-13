package com.snapride.bus_service.repository;

import com.snapride.bus_service.entity.BookingPassenger;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingPassengerRepository extends JpaRepository<BookingPassenger, Long> {
}
