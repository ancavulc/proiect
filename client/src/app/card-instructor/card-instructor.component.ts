import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';

@Component({
  selector: 'app-card-instructor',
  templateUrl: './card-instructor.component.html',
  styleUrls: ['./card-instructor.component.scss']
})
export class CardInstructorComponent implements OnInit {

  details: UserDetails;
  // dataSource: MatTableDataSource<UserDetails>;

  constructor(private auth: AuthenticationService) {

   }

  ngOnInit(): void {

  //   this.auth.cardInstructor().subscribe(data => {
  //     this.details = data;
  //     this.dataSource = new MatTableDataSource<UserDetails>(this.details);
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }
}
}
