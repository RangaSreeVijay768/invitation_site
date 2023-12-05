import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginWithFacebookComponent } from './users-login-with-facebook.component';

describe('UsersLoginWithFacebookComponent', () => {
  let component: UsersLoginWithFacebookComponent;
  let fixture: ComponentFixture<UsersLoginWithFacebookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLoginWithFacebookComponent]
    });
    fixture = TestBed.createComponent(UsersLoginWithFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
