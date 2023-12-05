import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventLocationsByEventComponent } from './events-get-event-locations-by-event.component';

describe('EventsGetEventLocationsByEventComponent', () => {
  let component: EventsGetEventLocationsByEventComponent;
  let fixture: ComponentFixture<EventsGetEventLocationsByEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventLocationsByEventComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventLocationsByEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
