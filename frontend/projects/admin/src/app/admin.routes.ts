import { Routes } from '@angular/router';

import { AddBusComponent } from './buses/components/add-bus/add-bus.component';
import { BusesListComponent } from './buses/components/buses-list/buses-list.component';
import { ViewBusComponent } from './buses/components/view-bus/view-bus.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AddUserComponent } from './users/components/add-user/add-user.component';
import { UserListComponent } from './users/components/user-list/user-list.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'buses', component: BusesListComponent },
      { path: 'buses/add', component: AddBusComponent},
      { path: 'buses/view/:id', component: ViewBusComponent},
      { path: 'users', component: UserListComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];