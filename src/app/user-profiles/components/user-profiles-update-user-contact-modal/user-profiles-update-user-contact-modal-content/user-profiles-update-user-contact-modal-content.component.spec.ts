import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUpdateUserContactModalContentComponent } from './user-profiles-update-user-contact-modal-content.component';

describe('UserProfilesUpdateUserContactModalContentComponent', () => {
  let component: UserProfilesUpdateUserContactModalContentComponent;
  let fixture: ComponentFixture<UserProfilesUpdateUserContactModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUpdateUserContactModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUpdateUserContactModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
