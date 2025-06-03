import { Component } from '@angular/core';

import { BusListComponent } from '../bus-list/bus-list.component';
import { BusSearchComponent } from '../bus-search/bus-search.component';

@Component({
  selector: 'app-snap-ride',
  imports: [BusSearchComponent, BusListComponent],
  templateUrl: './snap-ride.component.html',
  styleUrl: './snap-ride.component.scss'
})
export class SnapRideComponent {

}
