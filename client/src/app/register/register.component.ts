import { Component } from "@angular/core";
import { AuthenticationService, TokenPayload } from "../authentication.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

@Component({
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {

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

  constructor(private auth: AuthenticationService, private router: Router) { }

  states = [
    'Sinaia', 'Busteni', 'Azuga'
  ];

  register() {
    this.auth.register(this.credentials).subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });
  }
}
