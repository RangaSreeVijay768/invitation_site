import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventAddTicketTicketTypePageComponent } from './events-create-event-add-ticket-ticket-type-page.component';

describe('EventsCreateEventAddTicketTicketTypePageComponent', () => {
  let component: EventsCreateEventAddTicketTicketTypePageComponent;
  let fixture: ComponentFixture<EventsCreateEventAddTicketTicketTypePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventAddTicketTicketTypePageComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventAddTicketTicketTypePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
