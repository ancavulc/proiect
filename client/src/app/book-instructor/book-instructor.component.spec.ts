import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInstructorComponent } from './book-instructor.component';

describe('BookInstructorComponent', () => {
  let component: BookInstructorComponent;
  let fixture: ComponentFixture<BookInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
