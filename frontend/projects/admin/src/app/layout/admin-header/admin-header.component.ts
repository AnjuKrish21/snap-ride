import { Component, EventEmitter, Output } from '@angular/core';

import { materialImports } from '../../shared/material.imports';

@Component({
  selector: 'app-admin-header',
  imports: [...materialImports],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.scss'
})
export class AdminHeaderComponent {
  @Output() menuClick = new EventEmitter<void>();
}
