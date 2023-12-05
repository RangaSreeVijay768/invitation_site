import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUsersLogoutModalComponent } from './user-profiles-users-logout-modal.component';

describe('UserProfilesUsersLogoutModalComponent', () => {
  let component: UserProfilesUsersLogoutModalComponent;
  let fixture: ComponentFixture<UserProfilesUsersLogoutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUsersLogoutModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUsersLogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
