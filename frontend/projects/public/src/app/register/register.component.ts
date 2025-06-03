import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { materialImports } from '../shared/imports/material.imports';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private readonly router: Router) { }

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  onRegister() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering:', this.name, this.email);
    // Add your registration logic here
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }


}
