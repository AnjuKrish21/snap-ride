import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { UserService } from '../../../../admin/src/app/users/services/user.service';
import { materialImports } from '../shared/imports/material.imports';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private readonly router: Router,
    private readonly userService: UserService
  ) { }
  email: string = '';
  password: string = '';

  onLogin() {
    this.userService.login(this.email, this.password).subscribe({
      next: (response: { token: string }) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }


  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
