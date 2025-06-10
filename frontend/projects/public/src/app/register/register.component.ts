import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import {
  FormErrorComponent
} from '../../../../admin/src/app/shared/components/form-error/form-error.component';
import { User } from '../../../../admin/src/app/users/model/user.model';
import { UserService } from '../../../../admin/src/app/users/services/user.service';
import { materialImports } from '../shared/imports/material.imports';
import { Utils } from '../shared/services/utils';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, ...materialImports, FormErrorComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({});
  constructor(private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly userService: UserService) {
    this.initRegisterForm();
  }

  /**
   * Initializes the registration form with default values and validation rules.
  */
  private initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      id: [undefined],
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['user', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  /**
   * 
   * @param group The form group containing the password and confirmPassword controls.
   * @returns  ValidationErrors | null
   * This method checks if the password and confirmPassword fields match.
   */
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordsMismatch: true };
  }


  async onRegister() {
    if (this.registerForm.valid) {
      const { name, email, password, role } = this.registerForm.value;
      const userPayload = { name, email, password: password, role };
      this.userService.addUser(userPayload).subscribe({
        next: (user: User) => {
          this.redirectToLogin()
        },
        error: (error) => {
          console.error('Registration failed:', error);
        }
      });

    }
  }

  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }


}
