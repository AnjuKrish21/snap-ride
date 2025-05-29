import { Component } from '@angular/core';

import { materialImports } from '../../shared/material.imports';

@Component({
  selector: 'app-admin-footer',
  imports: [...materialImports],
  templateUrl: './admin-footer.component.html',
  styleUrl: './admin-footer.component.scss'
})
export class AdminFooterComponent {
  currentYear = new Date().getFullYear();
}
