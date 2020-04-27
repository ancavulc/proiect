import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  details: UserDetails;
  userMode: string;

  credentials: TokenPayload = {
    email: '',
    name: '',
    surname: '',
    phoneNumber: '',
    certificateSerie: '',
    birthDate: '',
    password: '',
    description: '',
    slope: '',
    town: ''
  };

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {

    let states = [
      'Sinaia', 'Busteni', 'Azuga'
    ];

    this.auth.profile().subscribe(user => {
      this.details = user;
      this.userMode = 'edit';
    }, (err) => {
      console.error(err);
    });
  }
}
