import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookInstructorService } from './book-instructor.service';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-instructor',
  templateUrl: './book-instructor.component.html',
  styleUrls: ['./book-instructor.component.scss']
})
export class BookInstructorComponent implements OnInit {
  selected = 'Busteni';
  bookingsForm: FormGroup;
  InstructorData: any = [];

  levels: string[] = [
    'Never skied before', 'Beginner', 'Intermediate', 'Advanced'
  ];

  slopes: string[] = [
    'Sinaia', 'Busteni', 'Azuga'
  ];

  sessions: string[] = [
    'Single', 'Group'
  ];

  constructor(public fb: FormBuilder, private bookApi: BookInstructorService, private auth: AuthenticationService, private router: Router,
    private ngZone: NgZone) {
    this.bookingsForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      level: [this.levels, [Validators.required]],
      instructor: ['', [Validators.required]],
      slope: [this.slopes, [Validators.required]],
      session: [this.sessions, [Validators.required]],
      date: ['', [Validators.required]],
      requirements: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.auth.GetInstructors().subscribe(data => {
      this.InstructorData = data;
    })
  }

  submitForm() {
    if (this.bookingsForm.valid) {
      this.bookApi.AddBooking(this.bookingsForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/message'))
      });
    }
  }
}
