package com.snapride.bus_service.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@Entity
@Table(name = "buses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Bus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String type;

    private String registrationNumber;

    private String arrivalTime;

    private Integer capacity;

    private String departureTime;

    @ManyToOne
    @JoinColumn(name = "from_location_id")
    private Locations fromLocation;

    @ManyToOne
    @JoinColumn(name = "to_location_id")
    private Locations toLocation;

    private String stops;
}