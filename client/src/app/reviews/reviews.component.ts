import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../add-review/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  ReviewsData: any = [];

  constructor(private reviewApi: ReviewService) {
    this.reviewApi.GetReviews().subscribe(data => {
      this.ReviewsData = data;
    })
  }

  ngOnInit(): void {
  }

}
