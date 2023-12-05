import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreatePaidTicketWhatAreFeesModalComponent } from './events-create-paid-ticket-what-are-fees-modal.component';

describe('EventsCreatePaidTicketWhatAreFeesModalComponent', () => {
  let component: EventsCreatePaidTicketWhatAreFeesModalComponent;
  let fixture: ComponentFixture<EventsCreatePaidTicketWhatAreFeesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreatePaidTicketWhatAreFeesModalComponent]
    });
    fixture = TestBed.createComponent(EventsCreatePaidTicketWhatAreFeesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
