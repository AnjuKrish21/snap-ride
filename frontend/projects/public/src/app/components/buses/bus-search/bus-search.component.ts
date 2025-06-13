import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Location } from '../../../../../../admin/src/app/buses/model/bus.model';
import { BusService } from '../../../../../../admin/src/app/buses/services/bus.service';
import {
    MatSelectComponent
} from '../../../../../../shared/src/lib/components/mat-select/mat-select.component';
import { materialImports } from '../../../../../../shared/src/lib/imports/material.imports';

@Component({
  selector: 'app-bus-search',
  imports: [CommonModule, FormsModule, ...materialImports, ReactiveFormsModule, MatSelectComponent],
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.scss'
})
export class BusSearchComponent implements OnInit {

  tripForm = new FormGroup({
    from: new FormControl(''),
    to: new FormControl(''),
    date: new FormControl(''),
  });

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
