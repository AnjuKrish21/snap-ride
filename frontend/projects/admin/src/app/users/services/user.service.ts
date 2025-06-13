import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { config } from '../../../../../public/src/app/config/config';
import { User } from '../model/user.model';

const baseUrl = config.userBaseApiUrl; // This is replaced at build time

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient) { }

  /**
   * dispatches a request to the server to get the list of users.
   * @returns An observable of the list of users
   */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}/users`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${baseUrl}/users/${user.id}`, user);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${baseUrl}/users`, user);
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${baseUrl}/auth/login`, { email: email, password: password });
  }
}
