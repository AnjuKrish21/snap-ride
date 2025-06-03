import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  ConfirmDialogComponent
} from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-buses-list',
  imports: [...materialImports, CommonModule, FormsModule],
  templateUrl: './buses-list.component.html',
  styleUrl: './buses-list.component.scss'
})
export class BusesListComponent {
  constructor(private readonly router: Router,
    private readonly dialog: MatDialog
  ) { }

  searchTerm = '';
  buses = [
    { id: 1, name: 'Express 1', route: 'A - B' },
    { id: 2, name: 'Express 2', route: 'B - C' }
  ];
  displayedColumns = ['name', 'route', 'actions'];

  get filteredBuses() {
    if (!this.searchTerm) return this.buses;
    return this.buses.filter(bus =>
      bus.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      bus.route.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onAddBus() {
    this.router.navigate(['/admin/buses/add']);
  }

  onView(bus: any) {
    const encodedId = btoa(bus.id.toString());
    this.router.navigate(['/admin/buses/view', encodedId]);
  }

  onEdit(bus: any) {
    // Edit logic
  }

  onDelete(bus: any) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Delete Bus',
        message: `Are you sure you want to delete "${bus.name}"?`
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Proceed with delete logic
      }
    });
  }

}
