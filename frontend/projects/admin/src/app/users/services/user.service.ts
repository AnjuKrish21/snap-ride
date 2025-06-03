import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

const baseUrl = API_BASE_URL; // This is replaced at build time

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = API_BASE_URL;
  constructor(private readonly http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}users`);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}users/${user.id}`, user);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}users`, user);
  }
}
