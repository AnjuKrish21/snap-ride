import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../shared/services/authentication.service';
import { authGuard } from './auth.guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;
  const route: ActivatedRouteSnapshot = {} as ActivatedRouteSnapshot;
  const state: RouterStateSnapshot = {} as RouterStateSnapshot;
  beforeEach(() => {
    authenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthenticationService,
          useValue: authenticationServiceSpy
        }
      ]
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('should return true if user is logged in', () => {
    // Given
    authenticationServiceSpy.isLoggedIn = true

    // When
    expect(executeGuard(route,state)).toBeTrue();
  });

  it('should return false if user is not logged in', () => {
    // Given
    authenticationServiceSpy.isLoggedIn = false;

    // When
    expect(executeGuard(route,state)).toBeFalse();
  });
});
