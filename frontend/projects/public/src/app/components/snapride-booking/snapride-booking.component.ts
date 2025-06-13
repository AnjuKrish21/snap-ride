import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Bus } from '../../../../../admin/src/app/buses/model/bus.model';
import { BusService } from '../../../../../admin/src/app/buses/services/bus.service';
import { materialImports } from '../../../../../shared/src/lib/imports/material.imports';

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
  bus: Bus;


  constructor(private readonly busService: BusService,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

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
      this.bus = bus;;
    });
  }


  toggleSeat(seat: any) {
    if (!seat.booked) {
      seat.selected = !seat.selected;
    }
  }


}
