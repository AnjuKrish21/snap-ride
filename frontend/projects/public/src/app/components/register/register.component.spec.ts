import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../../../../admin/src/app/users/services/user.service';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        UserService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('initRegisterForm', () => {

    it('should create the registerForm with expected controls', () => {
      const form = component['registerForm'];
      expect(form.contains('id')).toBeTrue();
      expect(form.contains('name')).toBeTrue();
      expect(form.contains('email')).toBeTrue();
      expect(form.contains('password')).toBeTrue();
      expect(form.contains('confirmPassword')).toBeTrue();
      expect(form.contains('role')).toBeTrue();
    });

    it('should set the default values for the form controls', () => {
      const form = component['registerForm'];
      expect(form.get('id')?.value).toBeNull();
      expect(form.get('name')?.value).toBe('');
      expect(form.get('email')?.value).toBe('');
      expect(form.get('password')?.value).toBe('');
      expect(form.get('confirmPassword')?.value).toBe('');
      expect(form.get('role')?.value).toBe('user');
    });

    it('should set the validators for the form controls', () => {
      const form = component['registerForm'];
      expect(form.get('id')?.validator).toBeNull();
      expect(form.get('name')?.validator).toBeTruthy();
      expect(form.get('email')?.validator).toBeTruthy();
      expect(form.get('password')?.validator).toBeTruthy();
      expect(form.get('confirmPassword')?.validator).toBeTruthy();
      expect(form.get('role')?.validator).toBeTruthy();
    });

    it('should set the password match validator for the form', () => {
      const form = component['registerForm'];
      expect(form.validator).toBeTruthy();
    });

    it('should require name with minimum length of 2', () => {
      const name = component['registerForm'].get('name');
      name?.setValue('');
      expect(name?.valid).toBeFalse();

      name?.setValue('A');
      expect(name?.valid).toBeFalse();

      name?.setValue('Ab');
      expect(name?.valid).toBeTrue();
    });

    it('should validate email format', () => {
      const email = component['registerForm'].get('email');
      email?.setValue('invalid');
      expect(email?.valid).toBeFalse();

      email?.setValue('test@example.com');
      expect(email?.valid).toBeTrue();
    });

    it('should require password with minimum length of 6', () => {
      const password = component['registerForm'].get('password');
      password?.setValue('123');
      expect(password?.valid).toBeFalse();

      password?.setValue('123456');
      expect(password?.valid).toBeTrue();
    });

    it('should validate that password and confirmPassword match', () => {
      const form = component['registerForm'];
      form.get('password')?.setValue('password123');
      form.get('confirmPassword')?.setValue('password321');
      expect(form.errors?.['passwordsMismatch']).toBeTrue();

      form.get('confirmPassword')?.setValue('password123');
      expect(form.errors).toBeNull();
    });
  });
});
