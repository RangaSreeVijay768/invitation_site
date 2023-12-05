import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesDeleteUserContactComponent } from './user-profiles-delete-user-contact.component';

describe('UserProfilesDeleteUserContactComponent', () => {
  let component: UserProfilesDeleteUserContactComponent;
  let fixture: ComponentFixture<UserProfilesDeleteUserContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesDeleteUserContactComponent]
    });
    fixture = TestBed.createComponent(UserProfilesDeleteUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
