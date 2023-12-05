import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRsvpPaidModalComponent } from './events-rsvp-paid-modal.component';

describe('EventsRsvpPaidModalComponent', () => {
  let component: EventsRsvpPaidModalComponent;
  let fixture: ComponentFixture<EventsRsvpPaidModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRsvpPaidModalComponent]
    });
    fixture = TestBed.createComponent(EventsRsvpPaidModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
