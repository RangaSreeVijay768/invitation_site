import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUserProfilePageComponent } from './user-profiles-user-profile-page.component';

describe('UserProfilesUserProfilePageComponent', () => {
  let component: UserProfilesUserProfilePageComponent;
  let fixture: ComponentFixture<UserProfilesUserProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilesUserProfilePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilesUserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
