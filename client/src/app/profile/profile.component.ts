import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  details: UserDetails;
  userMode: string;

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    this.auth.profile().subscribe(user => {
      this.details = user;
      this.userMode = 'user';
    }, (err) => {
      console.error(err);
    });
  }
}

