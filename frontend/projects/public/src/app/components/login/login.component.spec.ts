import { of } from 'rxjs';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserService } from '../../../../../admin/src/app/users/services/user.service';
import {
    AuthenticationService
} from '../../../../../shared/src/lib/services/authentication.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['login']);
    authenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', ['setAuthenticationToken']);
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: UserService,
          useValue: userServiceSpy
        },
        {
          provide: AuthenticationService,
          useValue: userServiceSpy
        }
      ],
      imports: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('login', () => {
    it('should call login method', () => {
      // Given
      const loginSpy = spyOn(component, 'onLogin');

      // When
      component.onLogin();

      // Then
      expect(loginSpy).toHaveBeenCalled();
    });

    fit('should logging in for a valid email and password', () => {
      // Given
      component.email = 'test@gmail.com';
      component.password = 'password123';
      userServiceSpy.login.and.returnValue(of({ token: 'fake-token' }));
      authenticationServiceSpy.setAuthenticationToken.and.callThrough();

      // When
      component.onLogin();

      // Then
      expect(userServiceSpy.login)
        .toHaveBeenCalledWith(component.email, component.password);
      expect(authenticationServiceSpy.setAuthenticationToken).toHaveBeenCalledWith('fake-token');
    });

    xit('should not log in for an invalid email', () => {
      // Given
      component.email = 'invalid-email';
      component.password = 'password123';
      userServiceSpy.login.and.rejectWith("error" as never);

      // When
      component.onLogin();

      // Then
      expect(userServiceSpy.login).toHaveBeenCalledWith(component.email, component.password);
      expect(authenticationServiceSpy.setAuthenticationToken).not.toHaveBeenCalled();
    });
  });
});
