import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsReadUserContactsCsvComponent } from './events-read-user-contacts-csv.component';

describe('EventsReadUserContactsCsvComponent', () => {
  let component: EventsReadUserContactsCsvComponent;
  let fixture: ComponentFixture<EventsReadUserContactsCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsReadUserContactsCsvComponent]
    });
    fixture = TestBed.createComponent(EventsReadUserContactsCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
