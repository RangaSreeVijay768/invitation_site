import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesUpdateUserContactFormComponent } from './user-profiles-update-user-contact-form.component';

describe('UserProfilesUpdateUserContactFormComponent', () => {
  let component: UserProfilesUpdateUserContactFormComponent;
  let fixture: ComponentFixture<UserProfilesUpdateUserContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesUpdateUserContactFormComponent]
    });
    fixture = TestBed.createComponent(UserProfilesUpdateUserContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
