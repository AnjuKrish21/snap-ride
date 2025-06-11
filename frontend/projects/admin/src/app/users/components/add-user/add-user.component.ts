import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GoBackComponent } from '../../../shared/components/go-back/go-back.component';
import { materialImports } from '../../../shared/imports/material.imports';
import { User } from '../../model/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  imports: [CommonModule, FormsModule, ...materialImports, GoBackComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {
  user: User = {
    // id:5 ,
    name: '',
    email: '',
    role: '',
    password: 'test1234',
  };

  constructor(private readonly userService: UserService,
    private readonly location: Location
  ) { }

  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: () => {
        this.location.back();
      }
    });

  }
}
