import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateUserContactSelectContactTypeModalContentComponent } from './user-profiles-create-user-contact-select-contact-type-modal-content.component';

describe('UserProfilesCreateUserContactSelectContactTypeModalContentComponent', () => {
  let component: UserProfilesCreateUserContactSelectContactTypeModalContentComponent;
  let fixture: ComponentFixture<UserProfilesCreateUserContactSelectContactTypeModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateUserContactSelectContactTypeModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateUserContactSelectContactTypeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
