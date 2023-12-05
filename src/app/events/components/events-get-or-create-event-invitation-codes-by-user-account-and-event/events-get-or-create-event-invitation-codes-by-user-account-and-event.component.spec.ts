import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent } from './events-get-or-create-event-invitation-codes-by-user-account-and-event.component';

describe('EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent', () => {
  let component: EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent;
  let fixture: ComponentFixture<EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetOrCreateEventInvitationCodesByUserAccountAndEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
