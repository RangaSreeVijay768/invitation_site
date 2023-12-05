import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventCreateTicketPageComponent } from './events-create-event-create-ticket-page.component';

describe('EventsCreateEventCreateTicketPageComponent', () => {
  let component: EventsCreateEventCreateTicketPageComponent;
  let fixture: ComponentFixture<EventsCreateEventCreateTicketPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventCreateTicketPageComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventCreateTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
