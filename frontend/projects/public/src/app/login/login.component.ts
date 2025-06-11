import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserService } from '../../../../admin/src/app/users/services/user.service';
import { materialImports } from '../shared/imports/material.imports';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private readonly router: Router,
    private readonly userService: UserService,
    private readonly matSnackBar: MatSnackBar,
    private readonly authenticationService: AuthenticationService
  ) { }
  email: string = '';
  password: string = '';

  /**
   * Handles the login action by calling the user service to authenticate the user.
   */
  onLogin() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        console.log('Login successful', response);
        if (response && response.token) {
          this.authenticationService.setAuthenticationToken(response.token);
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        this.matSnackBar.open('Login failed. Please check your credentials and try again.', 'Close', {
          duration: 3000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ['snackbar-error']
        });
      }
    });
  }

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
