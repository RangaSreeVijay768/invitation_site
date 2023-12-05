import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventAttendeesComponent } from './events-get-event-attendees.component';

describe('EventsGetEventAttendeesComponent', () => {
  let component: EventsGetEventAttendeesComponent;
  let fixture: ComponentFixture<EventsGetEventAttendeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventAttendeesComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventAttendeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
