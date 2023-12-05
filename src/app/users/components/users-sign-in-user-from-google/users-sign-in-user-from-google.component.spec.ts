import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignInUserFromGoogleComponent } from './users-sign-in-user-from-google.component';

describe('UsersSignInUserFromGoogleComponent', () => {
  let component: UsersSignInUserFromGoogleComponent;
  let fixture: ComponentFixture<UsersSignInUserFromGoogleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersSignInUserFromGoogleComponent]
    });
    fixture = TestBed.createComponent(UsersSignInUserFromGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
