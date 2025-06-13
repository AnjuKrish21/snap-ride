import { map, Observable, of, startWith } from 'rxjs';

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {
    FormErrorComponent
} from '../../../../../../shared/src/lib/components/form-error/form-error.component';
import { GoBackComponent } from '../../../shared/components/go-back/go-back.component';
import { ValidatorPatterns } from '../../../shared/constants/shared-contant';
import { materialImports } from '../../../shared/imports/material.imports';
import { BusInputs } from '../../model/bus.enum';
import { BusType, Location } from '../../model/bus.model';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-add-bus',
  imports: [CommonModule, ReactiveFormsModule, ...materialImports, GoBackComponent, FormErrorComponent],
  templateUrl: './add-bus.component.html',
  styleUrl: './add-bus.component.scss'
})
export class AddBusComponent implements OnInit {
  busForm!: FormGroup;
  BUS_INPUTS = BusInputs;

  stopsList = ['Stop 1', 'Stop 2', 'Stop 3', 'Stop 4']; // Replace with your actual stops
  locations: Location[] = [];
  busTypes: BusType[] = [];
  filteredFromLocations: Observable<Location[]> = of([]);
  filteredToLocations: Observable<Location[]> = of([]);
  displayLocationName = (location: Location) => {
    return location.name || '';
  };
  constructor(private readonly formBuilder: FormBuilder,
    private readonly busService: BusService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.getBusTypes();
    this.getLocations();
    this.initBusForm();
    this.getFilteredFromLocations();
    this.getFilteredToLocations();
  }

  private getFilteredFromLocations() {
    this.filteredFromLocations = this.busForm.get(this.BUS_INPUTS.FROM_LOCATION)?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value.name || value || '')),
    ) || of([]);
  }

  private getFilteredToLocations() {
    const to = this.busForm.value?.[this.BUS_INPUTS.TO_LOCATION];
    this.filteredToLocations = this.busForm.get(this.BUS_INPUTS.TO_LOCATION)?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value.name || value || '')),
    ) || of([]);
  }

  private _filter(value: string): Location[] {
    const filterValue = value.toLowerCase();
    return this.locations.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  private getLocations() {
    this.busService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  private getBusTypes() {
    this.busService.getBusTypes().subscribe((busTypes) => {
      this.busTypes = busTypes;
    });
  }

  private initBusForm() {
    this.busForm = this.formBuilder.group({
      [BusInputs.NAME]: ['', Validators.required],
      [BusInputs.FROM_LOCATION]: ['', Validators.required],
      [BusInputs.TO_LOCATION]: ['', Validators.required],
      [BusInputs.TYPE]: ['', Validators.required],
      [BusInputs.STOPS]: [[], Validators.required],
      [BusInputs.DEPARTURE_TIME]: ['', Validators.required],
      [BusInputs.ARRIVAL_TIME]: ['', Validators.required],
      [BusInputs.CAPACITY]: ['', [Validators.required, Validators.min(1)]],
      [BusInputs.REGISTRATION_NUMBER]: ['', [Validators.required, Validators.pattern(ValidatorPatterns.REGISTRATION_NUMBER)]],
    });
  }

  onSubmit() {
    if (this.busForm.valid) {
      this.busService.saveBus(this.busForm.value)
        .subscribe((response) => {
          this.router.navigateByUrl('admin/buses');
        });
    }
  }
}
