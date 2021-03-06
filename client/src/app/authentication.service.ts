import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';

export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
  surname: string;
  phoneNumber: string;
  birthDate: string;
  description: string;
  slope: string;
  town: string;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
  surname?: string;
  phoneNumber?: string;
  certificateSerie?: string;
  birthDate?: string;
  description?: string;
  slope?: String;
  town?: String;
}

@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post' | 'get', type: 'login' | 'register' | 'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`http://localhost:3000/api/${type}`, user);
    } else if (method === 'get') {
      base = this.http.get(`http://localhost:3000/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }
    else {
      base = this.http.put(`http://localhost:3000/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` } });
    }


    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this.request('get', 'profile');
  }

  // Get student
  GetInstructor(id): Observable<any> {
    let API_URL = `http://localhost:3000/api/read/${id}`;
    return this.http.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res || {}
        })
      )
  }

  UpdateInstructor(id, data): Observable<any> {
    let API_URL = `http://localhost:3000/api/edit/${id}`;
    return this.http.put(API_URL, data);
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/');
  }

  // Get all students
  GetInstructors() {
    return this.http.get(`http://localhost:3000/api`);
  }

}
