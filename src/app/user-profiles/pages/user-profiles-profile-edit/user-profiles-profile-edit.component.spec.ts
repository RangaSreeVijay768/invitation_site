import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesProfileEditComponent } from './user-profiles-profile-edit.component';

describe('UserProfilesProfileEditComponent', () => {
  let component: UserProfilesProfileEditComponent;
  let fixture: ComponentFixture<UserProfilesProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilesProfileEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilesProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
