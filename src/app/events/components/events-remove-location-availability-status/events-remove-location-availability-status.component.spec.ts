import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRemoveLocationAvailabilityStatusComponent } from './events-remove-location-availability-status.component';

describe('EventsRemoveLocationAvailabilityStatusComponent', () => {
  let component: EventsRemoveLocationAvailabilityStatusComponent;
  let fixture: ComponentFixture<EventsRemoveLocationAvailabilityStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRemoveLocationAvailabilityStatusComponent]
    });
    fixture = TestBed.createComponent(EventsRemoveLocationAvailabilityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
