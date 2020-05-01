import { Component, OnInit, NgZone } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  studentForm: FormGroup;
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

  constructor(public fb: FormBuilder, private auth: AuthenticationService, private actRoute: ActivatedRoute, private router: Router, private ngZone: NgZone) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.auth.GetInstructor(id).subscribe(data => {
      console.log(data.subjects)
      this.studentForm = this.fb.group({
        name: [data.name, [Validators.required]],
        surname: [data.surname, [Validators.required]],
        email: [data.email, [Validators.required]],
        phoneNumber: [data.phoneNumber, [Validators.required]],
        description: [data.description, [Validators.required]],
        town: [data.town, [Validators.required]]
      })
    })
   }

  ngOnInit(): void {

    this.auth.profile().subscribe(user => {
      this.details = user;
      this.userMode = 'edit';
    }, (err) => {
      console.error(err);
    });

  }

  updateStudentForm() {
    console.log(this.studentForm.value)
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.auth.UpdateInstructor(id, this.studentForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/profile'))
      });
    }
  }
}
