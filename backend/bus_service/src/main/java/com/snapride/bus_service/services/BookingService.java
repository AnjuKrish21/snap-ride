package com.snapride.bus_service.services;

import com.snapride.bus_service.dto.CreateBookingDTO;
import com.snapride.bus_service.dto.PassengerResponseDTO;
import com.snapride.bus_service.dto.ResponseBookingDTO;
import com.snapride.bus_service.entity.Booking;
import com.snapride.bus_service.entity.BookingPassenger;
import com.snapride.bus_service.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    public ResponseBookingDTO createBooking(CreateBookingDTO dto) {
        Booking booking = new Booking();
        booking.setBusId(dto.getBusId());
        booking.setNoOfPassengers(dto.getNoOfPassengers());

        List<BookingPassenger> passengers = dto.getPassengers().stream().map(p -> {
            BookingPassenger bp = new BookingPassenger();
            bp.setFullName(p.getFullName());
            bp.setMobile(p.getMobile());
            bp.setEmail(p.getEmail());
            bp.setBooking(booking);
            return bp;
        }).collect(Collectors.toList());

        booking.setPassengers(passengers);
        Booking saved = bookingRepository.save(booking);

        // Map to response DTO
        ResponseBookingDTO response = new ResponseBookingDTO();
        response.setBookingId(saved.getId());
        response.setBusId(saved.getBusId());
        response.setNoOfPassengers(saved.getNoOfPassengers());

        List<PassengerResponseDTO> passengerResponses = saved.getPassengers().stream().map(p -> {
            PassengerResponseDTO pr = new PassengerResponseDTO();
            pr.setId(p.getId());
            pr.setFullName(p.getFullName());
            pr.setMobile(p.getMobile());
            pr.setEmail(p.getEmail());
            return pr;
        }).collect(Collectors.toList());

        response.setPassengers(passengerResponses);
        return response;
    }
}
