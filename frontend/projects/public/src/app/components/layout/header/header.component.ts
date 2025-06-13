import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { materialImports } from '../../../../../../shared/src/lib/imports/material.imports';
import {
    AuthenticationService
} from '../../../../../../shared/src/lib/services/authentication.service';
import { AppRoutes } from '../../../app.routes.enum';

@Component({
  selector: 'app-header',
  imports: [...materialImports],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean;

  constructor(private readonly router: Router,
    private readonly authenticationService: AuthenticationService
  ) {
    this.isLoggedIn = this.authenticationService.isLoggedIn();
  }

  redirectToLogin() {
    this.router.navigateByUrl(`/${AppRoutes.Login}`);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigateByUrl(`/${AppRoutes.SnapRide}`);
  }

}
