import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUsersLogoutModalContentComponent } from './user-profiles-users-logout-modal-content.component';

describe('UserProfilesUsersLogoutModalContentComponent', () => {
  let component: UserProfilesUsersLogoutModalContentComponent;
  let fixture: ComponentFixture<UserProfilesUsersLogoutModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUsersLogoutModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUsersLogoutModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
