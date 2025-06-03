import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { materialImports } from '../../shared/imports/material.imports';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { AdminHeaderComponent } from '../admin-header/admin-header.component';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminHeaderComponent, AdminSidebarComponent, AdminFooterComponent, ...materialImports],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
