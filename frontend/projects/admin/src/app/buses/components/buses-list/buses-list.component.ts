import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
    ConfirmDialogComponent
} from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { materialImports } from '../../../shared/imports/material.imports';
import { Bus } from '../../model/bus.model';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-buses-list',
  imports: [...materialImports, CommonModule, FormsModule],
  templateUrl: './buses-list.component.html',
  styleUrl: './buses-list.component.scss'
})
export class BusesListComponent implements OnInit {
  constructor(private readonly router: Router,
    private readonly dialog: MatDialog,
    private readonly busService: BusService
  ) { }

  searchTerm = '';
  buses: Bus[] = [];
  displayedColumns = ['name', 'route', 'actions'];

  ngOnInit(): void {
    this.loadBuses();
  }

  private loadBuses() {
    this.busService.getAllBuses().subscribe({
      next: (buses: Bus[]) => {
        this.buses = buses;
      }
    });
  }

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
