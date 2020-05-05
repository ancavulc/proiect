import { Injectable } from '@angular/core';
import { Booking } from './booking';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BookInstructorService {

  endpoint: string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddBooking(data: Booking): Observable<any> {
    let API_URL = `http://localhost:3000/api/book`;
    return this.http.post(API_URL, data);
  }

}
