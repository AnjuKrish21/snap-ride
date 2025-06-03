import { Component } from '@angular/core';

import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-footer',
  imports: [...materialImports],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
