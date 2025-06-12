import { Routes } from '@angular/router';

import { AppRoutes } from './app.routes.enum';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SnapRideComponent } from './snap-ride/snap-ride.component';
import { SnaprideBookingComponent } from './snapride-booking/snapride-booking.component';
import { SnaprideHomeComponent } from './snapride-home/snapride-home.component';

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
