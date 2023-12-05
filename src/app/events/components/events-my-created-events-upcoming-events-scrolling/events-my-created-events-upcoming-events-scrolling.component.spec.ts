import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMyCreatedEventsUpcomingEventsScrollingComponent } from './events-my-created-events-upcoming-events-scrolling.component';

describe('EventsMyCreatedEventsUpcomingEventsScrollingComponent', () => {
  let component: EventsMyCreatedEventsUpcomingEventsScrollingComponent;
  let fixture: ComponentFixture<EventsMyCreatedEventsUpcomingEventsScrollingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMyCreatedEventsUpcomingEventsScrollingComponent]
    });
    fixture = TestBed.createComponent(EventsMyCreatedEventsUpcomingEventsScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
