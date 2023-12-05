import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRsvpPaidModalContentComponent } from './events-rsvp-paid-modal-content.component';

describe('EventsRsvpPaidModalContentComponent', () => {
  let component: EventsRsvpPaidModalContentComponent;
  let fixture: ComponentFixture<EventsRsvpPaidModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRsvpPaidModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsRsvpPaidModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
