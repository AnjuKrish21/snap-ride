import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  isLoggedIn: boolean = false;

  setAuthenticationToken(token: string): void {
    localStorage.setItem('token', token);
    this.isLoggedIn = true;
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  getAuthToken(): string {
    return localStorage.getItem('token') || '';
  }
}
