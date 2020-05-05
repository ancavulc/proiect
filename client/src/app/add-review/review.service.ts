import { Injectable } from '@angular/core';
import { Review } from './review';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  endpoint: string = 'api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add student
  AddReview(data: Review): Observable<any> {
    let API_URL = `http://localhost:3000/api/reviews`;
    return this.http.post(API_URL, data);
  }

  GetReviews() {
    return this.http.get(`http://localhost:3000/api/reviews`);
  }

}
