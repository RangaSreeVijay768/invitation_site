import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateMultipleUserContactComponent } from './user-profiles-create-multiple-user-contact.component';

describe('UserProfilesCreateMultipleUserContactComponent', () => {
  let component: UserProfilesCreateMultipleUserContactComponent;
  let fixture: ComponentFixture<UserProfilesCreateMultipleUserContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateMultipleUserContactComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateMultipleUserContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
