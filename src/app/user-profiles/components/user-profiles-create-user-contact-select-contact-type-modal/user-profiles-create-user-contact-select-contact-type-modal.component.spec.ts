import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateUserContactSelectContactTypeModalComponent } from './user-profiles-create-user-contact-select-contact-type-modal.component';

describe('UserProfilesCreateUserContactSelectContactTypeModalComponent', () => {
  let component: UserProfilesCreateUserContactSelectContactTypeModalComponent;
  let fixture: ComponentFixture<UserProfilesCreateUserContactSelectContactTypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateUserContactSelectContactTypeModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateUserContactSelectContactTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
