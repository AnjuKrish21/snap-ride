package com.snapride.bus_service.controller;

import com.snapride.bus_service.dto.CreateBookingDTO;
import com.snapride.bus_service.dto.ResponseBookingDTO;
import com.snapride.bus_service.services.BookingService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:4201"})
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public ResponseEntity<ResponseBookingDTO> createBooking(@Valid @RequestBody CreateBookingDTO dto) {
        ResponseBookingDTO response = bookingService.createBooking(dto);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
