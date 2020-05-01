import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-instructors',
  templateUrl: './list-instructors.component.html',
  styleUrls: ['./list-instructors.component.scss']
})
export class ListInstructorsComponent implements OnInit {

  IntructorData: any = [];

  constructor(private auth: AuthenticationService) {
    this.auth.GetInstructors().subscribe(data => {
      this.IntructorData = data;
    })
  }

  ngOnInit(): void {
  }

}
