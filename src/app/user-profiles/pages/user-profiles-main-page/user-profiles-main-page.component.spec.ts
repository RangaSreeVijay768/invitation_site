import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesMainPageComponent } from './user-profiles-main-page.component';

describe('UserProfilesMainPageComponent', () => {
  let component: UserProfilesMainPageComponent;
  let fixture: ComponentFixture<UserProfilesMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfilesMainPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfilesMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
