import { Component } from '@angular/core';

import { BusListComponent } from '../buses/bus-list/bus-list.component';
import { BusSearchComponent } from '../buses/bus-search/bus-search.component';

@Component({
  selector: 'app-snap-ride',
  imports: [BusSearchComponent, BusListComponent],
  templateUrl: './snap-ride.component.html',
  styleUrl: './snap-ride.component.scss'
})
export class SnapRideComponent {

}
