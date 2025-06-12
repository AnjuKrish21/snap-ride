import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BusService } from '../../../../admin/src/app/buses/services/bus.service';
import { materialImports } from '../shared/imports/material.imports';

@Component({
  selector: 'app-snapride-booking',
  imports: [...materialImports],
  templateUrl: './snapride-booking.component.html',
  styleUrl: './snapride-booking.component.scss'
})
export class SnaprideBookingComponent implements OnInit {


  seats = Array.from({ length: 20 }, (_, i) => ({
    number: i + 1,
    booked: i % 5 === 0, // simulate some booked seats
    selected: false
  }));


  constructor(private readonly busService: BusService,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      const busId = params['id'];
      if (busId) {
        this.busService.getBusById(busId).subscribe((bus) => {
          // Handle the bus data as needed
          console.log('Bus data:', bus);
        });
      } else {
        console.warn('No bus ID provided in route parameters.');
        this.router.navigate(['/']);
      }
    });
  }


  toggleSeat(seat: any) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
    }
  }


}
