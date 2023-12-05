import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesAttendeesListByEventBlastModalContentComponent } from './user-profiles-attendees-list-by-event-blast-modal-content.component';

describe('UserProfilesAttendeesListByEventBlastModalContentComponent', () => {
  let component: UserProfilesAttendeesListByEventBlastModalContentComponent;
  let fixture: ComponentFixture<UserProfilesAttendeesListByEventBlastModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesAttendeesListByEventBlastModalContentComponent]
    });
    fixture = TestBed.createComponent(UserProfilesAttendeesListByEventBlastModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
