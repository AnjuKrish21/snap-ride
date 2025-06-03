import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

import { materialImports } from '../shared/imports/material.imports';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ...materialImports],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private readonly router: Router) { }
  email: string = '';
  password: string = '';
  onLogin() {

  }


  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
}
