import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventTicketInfoByEventComponent } from './events-get-event-ticket-info-by-event.component';

describe('EventsGetEventTicketInfoByEventComponent', () => {
  let component: EventsGetEventTicketInfoByEventComponent;
  let fixture: ComponentFixture<EventsGetEventTicketInfoByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventTicketInfoByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventTicketInfoByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
