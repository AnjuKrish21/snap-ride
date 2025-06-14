import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserService } from '../../../../../admin/src/app/users/services/user.service';
import { ERROR } from '../../../../../shared/src/lib/constants/error';
import { materialImports } from '../../../../../shared/src/lib/imports/material.imports';
import {
    AuthenticationService
} from '../../../../../shared/src/lib/services/authentication.service';
import { NotificationService } from '../../../../../shared/src/public-api';
import { AppRoutes } from '../../app.routes.enum';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly authenticationService: AuthenticationService,
    private readonly notificationService: NotificationService
  ) { }
  email: string = '';
  password: string = '';

  /**
   * Handles the login action by calling the user service to authenticate the user.
   */
  onLogin() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        if (response && response.token) {
          this.authenticationService.setAuthenticationToken(response.token);
          this.router.navigateByUrl(`/${AppRoutes.SnapRide}`);
        }
      },
      error: (error) => {
        console.error(ERROR.CONSOLE.LOGIN_FAILED, error);
        this.notificationService.show(ERROR.LOGIN_FAILED);
      }
    });
  }

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
