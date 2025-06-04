import { Component } from '@angular/core';

import { FooterComponent } from '../../layout/footer/footer.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { BusListComponent } from '../bus-list/bus-list.component';
import { BusSearchComponent } from '../bus-search/bus-search.component';

@Component({
  selector: 'app-snap-ride',
  imports: [BusSearchComponent, BusListComponent, HeaderComponent, FooterComponent],
  templateUrl: './snap-ride.component.html',
  styleUrl: './snap-ride.component.scss'
})
export class SnapRideComponent {

}
