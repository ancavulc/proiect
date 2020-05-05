import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from './review.service';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  reviewsForm: FormGroup;
  InstructorData: any = [];

  constructor(public fb: FormBuilder, private reviewApi: ReviewService, private auth: AuthenticationService, private router: Router,
    private ngZone: NgZone) {

    this.reviewsForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      instructor: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.auth.GetInstructors().subscribe(data => {
      this.InstructorData = data;
    })
  }

  submitForm() {
    if (this.reviewsForm.valid) {
      this.reviewApi.AddReview(this.reviewsForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/reviews'))
      });
    }
  }

}
