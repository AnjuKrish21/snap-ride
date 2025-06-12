import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bus } from '../../../../../admin/src/app/buses/model/bus.model';
import { BusService } from '../../../../../admin/src/app/buses/services/bus.service';
import { materialImports } from '../../shared/imports/material.imports';
import { TimeFormatPipe } from '../../shared/pipes/time-format.pipe';

@Component({
  selector: 'app-bus-list',
  imports: [...materialImports, TimeFormatPipe],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss'
})
export class BusListComponent implements OnInit {
  buses: Bus[] = [];
  constructor(private readonly busService: BusService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.loadBuses();
  }

  private loadBuses(): void {
    this.busService.getAllBuses().subscribe({
      next: (buses: Bus[]) => {
        this.buses = buses;
      },
      error: (error: any) => {
        console.error('Error loading buses:', error);
      }
    });
  }

  booking(bus: Bus): void {
    this.router.navigate(['/snapRide/booking', bus.id]);
  }

}
