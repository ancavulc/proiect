import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  endpoint: string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddMessage(data: Message): Observable<any> {
    let API_URL = `http://localhost:3000/api/messages`;
    return this.http.post(API_URL, data);
  }
}
