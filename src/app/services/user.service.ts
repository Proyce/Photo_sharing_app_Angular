import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  user: User;

  private baseUrl: string = 'http://localhost:3000';

  createNewUser(data: any) {
    return this.http.post(`${this.baseUrl}/users`, data);
  }

  getUser(email: string) {
    return this.http.get(`${this.baseUrl}/users?email=${email}`);
  }
}
