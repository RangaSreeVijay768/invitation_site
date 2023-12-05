import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventAddTicketPromocodesPageComponent } from './events-create-event-add-ticket-promocodes-page.component';

describe('EventsCreateEventAddTicketPromocodesPageComponent', () => {
  let component: EventsCreateEventAddTicketPromocodesPageComponent;
  let fixture: ComponentFixture<EventsCreateEventAddTicketPromocodesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventAddTicketPromocodesPageComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventAddTicketPromocodesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
