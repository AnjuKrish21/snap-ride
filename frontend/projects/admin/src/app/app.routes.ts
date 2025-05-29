import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('../app/admin.routes').then(m => m.adminRoutes)
  }
];
