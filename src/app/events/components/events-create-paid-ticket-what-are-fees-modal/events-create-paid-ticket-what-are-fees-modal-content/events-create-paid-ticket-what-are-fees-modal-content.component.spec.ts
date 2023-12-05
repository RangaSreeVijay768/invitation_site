import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreatePaidTicketWhatAreFeesModalContentComponent } from './events-create-paid-ticket-what-are-fees-modal-content.component';

describe('EventsCreatePaidTicketWhatAreFeesModalContentComponent', () => {
  let component: EventsCreatePaidTicketWhatAreFeesModalContentComponent;
  let fixture: ComponentFixture<EventsCreatePaidTicketWhatAreFeesModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreatePaidTicketWhatAreFeesModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsCreatePaidTicketWhatAreFeesModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
