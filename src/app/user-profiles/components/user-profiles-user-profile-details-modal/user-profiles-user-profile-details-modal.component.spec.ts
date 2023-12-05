import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserProfileDetailsModalComponent } from './user-profiles-user-profile-details-modal.component';

describe('UserProfilesUserProfileDetailsModalComponent', () => {
  let component: UserProfilesUserProfileDetailsModalComponent;
  let fixture: ComponentFixture<UserProfilesUserProfileDetailsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUserProfileDetailsModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUserProfileDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
