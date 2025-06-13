import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterComponent } from '../layout/footer/footer.component';
import { HeaderComponent } from '../layout/header/header.component';

@Component({
  selector: 'app-snapride-home',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './snapride-home.component.html',
  styleUrl: './snapride-home.component.scss'
})
export class SnaprideHomeComponent {

}
