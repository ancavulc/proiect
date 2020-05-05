import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  IntructorData: any = [];

  constructor(private auth: AuthenticationService) {
    this.auth.GetInstructors().subscribe(data => {
      this.IntructorData = data;
    })
  }

  ngOnInit(): void {
    this.countInstructors();
  }

  countInstructors() {
    for (let element of this.IntructorData) {
      console.log(element.name);
    }
  }
}
