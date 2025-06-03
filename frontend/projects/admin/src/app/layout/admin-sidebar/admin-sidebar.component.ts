import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-admin-sidebar',
  imports: [RouterModule,...materialImports],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.scss'
})
export class AdminSidebarComponent {

}
