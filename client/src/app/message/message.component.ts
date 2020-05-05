import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './message.service';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {

  messagesForm: FormGroup;
  ans1: string[] = [
    '1','2','3'
  ];
  ans2: string[] = [
    '1','2','3'
  ];
  ans3: string[] = [
    '1','2','3'
  ];
  ans4: string[] = [
    '1','2','3'
  ];

  constructor(public fb: FormBuilder, private messageApi: MessageService, private router: Router,
    private ngZone: NgZone) {

      this.messagesForm = this.fb.group({
        quest1: ['', [Validators.required]],
        quest2: ['', [Validators.required]],
        quest3: ['', [Validators.required]],
        quest4: ['', [Validators.required]],
        quest5: ['', [Validators.required]]
      })

    }

  ngOnInit(): void {
  }

  submitForm() {
    if (this.messagesForm.valid) {
      this.messageApi.AddMessage(this.messagesForm.value).subscribe(res => {
        this.ngZone.run(() => this.router.navigateByUrl('/thank-you'));
      });
    }
  }
}
