import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsLocationAvailabilityStatusFormComponent } from './events-location-availability-status-form.component';

describe('EventsLocationAvailabilityStatusFormComponent', () => {
  let component: EventsLocationAvailabilityStatusFormComponent;
  let fixture: ComponentFixture<EventsLocationAvailabilityStatusFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsLocationAvailabilityStatusFormComponent]
    });
    fixture = TestBed.createComponent(EventsLocationAvailabilityStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
