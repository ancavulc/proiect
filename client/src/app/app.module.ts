import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from "./angular-material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ListInstructorsComponent } from './list-instructors/list-instructors.component';
import { BookInstructorComponent } from './book-instructor/book-instructor.component';
import { MessageComponent } from './message/message.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AddReviewComponent } from './add-review/add-review.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "instructors", component: ListInstructorsComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: "edit/:id", component: EditProfileComponent, canActivate: [AuthGuardService] },
  { path: "book", component: BookInstructorComponent },
  { path: "message", component: MessageComponent },
  { path: "thank-you", component: ThankYouComponent },
  { path: "reviews", component: ReviewsComponent },
  { path: "add-review", component: AddReviewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    EditProfileComponent,
    ListInstructorsComponent,
    BookInstructorComponent,
    MessageComponent,
    ThankYouComponent,
    ReviewsComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
