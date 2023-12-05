import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUpdateUserContactModalComponent } from './user-profiles-update-user-contact-modal.component';

describe('UserProfilesUpdateUserContactModalComponent', () => {
  let component: UserProfilesUpdateUserContactModalComponent;
  let fixture: ComponentFixture<UserProfilesUpdateUserContactModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUpdateUserContactModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUpdateUserContactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
