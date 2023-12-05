import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsMapUserContactsCsvHeadersFormComponent } from './events-map-user-contacts-csv-headers-form.component';

describe('EventsMapUserContactsCsvHeadersFormComponent', () => {
  let component: EventsMapUserContactsCsvHeadersFormComponent;
  let fixture: ComponentFixture<EventsMapUserContactsCsvHeadersFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsMapUserContactsCsvHeadersFormComponent]
    });
    fixture = TestBed.createComponent(EventsMapUserContactsCsvHeadersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
