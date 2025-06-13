import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  setAuthenticationToken(token: string): void {
    localStorage.setItem('token', token);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }
}
