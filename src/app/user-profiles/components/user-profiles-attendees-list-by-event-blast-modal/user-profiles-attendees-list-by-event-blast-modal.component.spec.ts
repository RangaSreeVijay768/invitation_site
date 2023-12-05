import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesAttendeesListByEventBlastModalComponent } from './user-profiles-attendees-list-by-event-blast-modal.component';

describe('UserProfilesAttendeesListByEventBlastModalComponent', () => {
  let component: UserProfilesAttendeesListByEventBlastModalComponent;
  let fixture: ComponentFixture<UserProfilesAttendeesListByEventBlastModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesAttendeesListByEventBlastModalComponent]
    });
    fixture = TestBed.createComponent(UserProfilesAttendeesListByEventBlastModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
