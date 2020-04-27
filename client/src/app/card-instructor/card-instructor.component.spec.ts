import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInstructorComponent } from './card-instructor.component';

describe('CardInstructorComponent', () => {
  let component: CardInstructorComponent;
  let fixture: ComponentFixture<CardInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
