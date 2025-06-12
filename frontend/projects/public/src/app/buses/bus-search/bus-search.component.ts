import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Location } from '../../../../../admin/src/app/buses/model/bus.model';
import { BusService } from '../../../../../admin/src/app/buses/services/bus.service';
import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-bus-search',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.scss'
})
export class BusSearchComponent implements OnInit {
  from = '';
  to = '';
  date: Date | null = null;
  locations: Location[] = [];
  constructor(private readonly busService: BusService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  private getLocations() {
    this.busService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  onSearch() {

  }
}
