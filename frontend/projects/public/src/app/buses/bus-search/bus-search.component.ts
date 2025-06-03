import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-bus-search',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './bus-search.component.html',
  styleUrl: './bus-search.component.scss'
})
export class BusSearchComponent {
  from = '';
  to = '';
  date: Date | null = null;
  onSearch() {

  }
}
