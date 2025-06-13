import { TestBed } from '@angular/core/testing';

import {
    AuthenticationService
} from '../../../../../shared/src/lib/services/authentication.service';

fdescribe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isLoggedIn', () => {
    it('should return true if user is authenticated', () => {
      // Given
      service.setAuthenticationToken('test-token');

      // When
      expect(service.isLoggedIn).toBeTrue();
    });

    it('should return false if user is not authenticated', () => {
      
      // Given
      service.logout();

      // When
      expect(service.isLoggedIn).toBeFalse();
    });
  });
});
