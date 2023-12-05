import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAddLocationAvailabilityStatusComponent } from './events-add-location-availability-status.component';

describe('EventsAddLocationAvailabilityStatusComponent', () => {
  let component: EventsAddLocationAvailabilityStatusComponent;
  let fixture: ComponentFixture<EventsAddLocationAvailabilityStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsAddLocationAvailabilityStatusComponent]
    });
    fixture = TestBed.createComponent(EventsAddLocationAvailabilityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
