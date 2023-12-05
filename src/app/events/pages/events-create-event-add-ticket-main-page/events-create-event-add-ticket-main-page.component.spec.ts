import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventAddTicketMainPageComponent } from './events-create-event-add-ticket-main-page.component';

describe('EventsCreateEventAddTicketMainPageComponent', () => {
  let component: EventsCreateEventAddTicketMainPageComponent;
  let fixture: ComponentFixture<EventsCreateEventAddTicketMainPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventAddTicketMainPageComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventAddTicketMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
