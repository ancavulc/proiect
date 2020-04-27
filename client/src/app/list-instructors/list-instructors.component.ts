import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-list-instructors',
  templateUrl: './list-instructors.component.html',
  styleUrls: ['./list-instructors.component.scss']
})
export class ListInstructorsComponent implements OnInit {

  details: any = [];

  constructor(private auth: AuthenticationService) {
    this.auth.getInstructors().subscribe(data => {
      this.details = data;
    })
  }

  ngOnInit(): void {
  }

}
