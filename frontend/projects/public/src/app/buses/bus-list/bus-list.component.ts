import { Component } from '@angular/core';

import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-bus-list',
  imports: [...materialImports],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss'
})
export class BusListComponent {
  // Example demo buses array for your Angular app
  buses = [
    {
      id: 1,
      name: 'Express Travels',
      type: 'AC Sleeper',
      departure: '10:00 PM',
      arrival: '6:00 AM',
      price: 850,
      route: 'Bangalore - Chennai'
    },
    {
      id: 2,
      name: 'CityLink',
      type: 'Non-AC Seater',
      departure: '9:30 PM',
      arrival: '5:30 AM',
      price: 600,
      route: 'Bangalore - Hyderabad'
    },
    {
      id: 3,
      name: 'RedLine',
      type: 'AC Seater',
      departure: '11:00 PM',
      arrival: '7:00 AM',
      price: 950,
      route: 'Bangalore - Mumbai'
    }
  ];
}
