import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInvitedUpcomingEventsComponent } from './events-invited-upcoming-events.component';

describe('EventsInvitedUpcomingEventsComponent', () => {
  let component: EventsInvitedUpcomingEventsComponent;
  let fixture: ComponentFixture<EventsInvitedUpcomingEventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsInvitedUpcomingEventsComponent]
    });
    fixture = TestBed.createComponent(EventsInvitedUpcomingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
