import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent } from './user-profiles-create-event-blast-and-add-event-blast-recipients.component';

describe('UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent', () => {
  let component: UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent;
  let fixture: ComponentFixture<UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent]
    });
    fixture = TestBed.createComponent(UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
