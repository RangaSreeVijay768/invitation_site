import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventInviteByEventAndUserAccountFormComponent } from './events-create-event-invite-by-event-and-user-account-form.component';

describe('EventsCreateEventInviteByEventAndUserAccountFormComponent', () => {
  let component: EventsCreateEventInviteByEventAndUserAccountFormComponent;
  let fixture: ComponentFixture<EventsCreateEventInviteByEventAndUserAccountFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventInviteByEventAndUserAccountFormComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventInviteByEventAndUserAccountFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
