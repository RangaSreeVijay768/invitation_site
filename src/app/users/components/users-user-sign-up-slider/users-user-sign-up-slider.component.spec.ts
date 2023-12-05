import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersUserSignUpSliderComponent } from './users-user-sign-up-slider.component';

describe('UsersUserSignUpSliderComponent', () => {
  let component: UsersUserSignUpSliderComponent;
  let fixture: ComponentFixture<UsersUserSignUpSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersUserSignUpSliderComponent]
    });
    fixture = TestBed.createComponent(UsersUserSignUpSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
