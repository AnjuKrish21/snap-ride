import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { materialImports } from '../../imports/material.imports';

@Component({
  selector: 'app-go-back',
  imports: [...materialImports],
  templateUrl: './go-back.component.html',
  styleUrl: './go-back.component.scss'
})
export class GoBackComponent {
  constructor(private readonly location: Location) { }
  
  /**
   * Navigates back to the previous page in the browser history.
   */
  goBack() {
    this.location.back();
  }
}
