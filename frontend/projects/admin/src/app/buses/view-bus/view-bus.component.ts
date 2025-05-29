import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { GoBackComponent } from '../../shared/go-back/go-back.component';
import { materialImports } from '../../shared/material.imports';

@Component({
  selector: 'app-view-bus',
  imports: [...materialImports, GoBackComponent],
  templateUrl: './view-bus.component.html',
  styleUrl: './view-bus.component.scss'
})
export class ViewBusComponent {
  bus = {
    id: '1',
    name: 'Bus 101',
    route: 'Route A',
    capacity: 50,
    status: 'Active',
    lastMaintenance: new Date('2023-10-01'),
    nextMaintenance: new Date('2023-12-01')
  }  
}
