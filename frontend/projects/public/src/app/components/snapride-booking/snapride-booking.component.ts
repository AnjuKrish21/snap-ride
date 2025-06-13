import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Bus } from '../../../../../admin/src/app/buses/model/bus.model';
import { BusService } from '../../../../../admin/src/app/buses/services/bus.service';
import { materialImports } from '../../../../../shared/src/lib/imports/material.imports';
import { AppRoutes } from '../../app.routes.enum';
import { BookingRequestDTO, BookingResponseDTO } from '../../models/BookingDTO';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-snapride-booking',
  imports: [...materialImports, ReactiveFormsModule],
  templateUrl: './snapride-booking.component.html',
  styleUrl: './snapride-booking.component.scss'
})
export class SnaprideBookingComponent implements OnInit {
  bus: Bus;
  seatForm: FormGroup;
  seatsCount: number = 0;

  get passengers(): FormArray {
    return this.seatForm.get('passengers') as FormArray;
  }


  constructor(private readonly busService: BusService,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
    private fb: FormBuilder,
    private readonly bookingService: BookingService
  ) {

    this.seatForm = this.fb.group({
      passengers: this.fb.array([this.createPassenger()])
    });

  }

  ngOnInit(): void {
    this.onSubscribeActiveRoute();
  }

  onSubscribeActiveRoute() {
    this.activeRoute.params.subscribe((params) => {
      const busId = params['id'];
      if (busId) {
        this.getBusById(parseInt(busId));
      } else {
        console.warn('No bus ID provided in route parameters.');
        this.router.navigate(['/']);
      }
    });
  }

  private getBusById(busId: number) {
    this.busService.getBusById(busId).subscribe((bus) => {
      this.bus = bus;
      this.availableSeats();
    });
  }

  private availableSeats() {
    this.bookingService.availableSeats(this.bus.id).subscribe((seatsCount: number) => {
      this.seatsCount = seatsCount;
    });
  }


  createPassenger(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addPassenger(): void {
    this.seatsCount--;
    this.passengers.push(this.createPassenger());
  }

  removePassenger(index: number): void {
    if (this.passengers.length > 1) {
      this.seatsCount++;
      this.passengers.removeAt(index);
    }
  }

  proceedToPayment(): void {
    const bookingFormValue = this.seatForm.value;
    const bookingDetails: BookingRequestDTO = {
      busId: this.bus.id,
      noOfPassengers: bookingFormValue.passengers.length,
      passengers: bookingFormValue.passengers
    }
    this.bookingService.addBooking(bookingDetails).subscribe((booking: BookingResponseDTO) => {
      if (booking.bookingId) {
        this.router.navigate(['/snapRide/payments', booking.bookingId]);
      }
    });
  }



}
