import { Routes } from '@angular/router';

import { authGuard } from '../../../shared/src/lib/core/guards/auth.guard';
import { AppRoutes } from './app.routes.enum';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SnapRideComponent } from './components/snap-ride/snap-ride.component';
import { SnaprideBookingComponent } from './components/snapride-booking/snapride-booking.component';
import { SnaprideHomeComponent } from './components/snapride-home/snapride-home.component';

export const routes: Routes = [
    {
        path: AppRoutes.SnapRide, component: SnaprideHomeComponent,
        children: [
            { path: AppRoutes.Home, component: SnapRideComponent },
            { path: AppRoutes.SnaprideBooking, component: SnaprideBookingComponent, canActivate: [authGuard] },
        ]
    },
    { path: AppRoutes.Login, component: LoginComponent },
    { path: AppRoutes.Register, component: RegisterComponent },
    { path: '**', redirectTo: AppRoutes.Home }
];
