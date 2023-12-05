import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventInvitationCodeComponent } from './events-get-event-invitation-code.component';

describe('EventsGetEventInvitationCodeComponent', () => {
  let component: EventsGetEventInvitationCodeComponent;
  let fixture: ComponentFixture<EventsGetEventInvitationCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventInvitationCodeComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventInvitationCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
