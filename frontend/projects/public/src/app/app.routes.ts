import { Routes } from '@angular/router';

import { SnapRideComponent } from './buses/snap-ride/snap-ride.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', component: SnapRideComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
