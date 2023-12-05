import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDetailsPaidPageComponent } from './events-event-details-paid-page.component';

describe('EventsEventDetailsPaidPageComponent', () => {
  let component: EventsEventDetailsPaidPageComponent;
  let fixture: ComponentFixture<EventsEventDetailsPaidPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDetailsPaidPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDetailsPaidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
