import { Routes } from '@angular/router';

import { SnapRideComponent } from './buses/snap-ride/snap-ride.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: 'snapRide', component: SnapRideComponent, canActivate: [authGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: 'snapRide' }
];
