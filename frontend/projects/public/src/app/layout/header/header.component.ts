import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { materialImports } from '../../shared/imports/material.imports';

@Component({
  selector: 'app-header',
  imports: [...materialImports],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private readonly router: Router) { }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }

}
