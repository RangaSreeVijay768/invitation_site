import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateMultipleUserContactsCsvComponent } from './events-create-multiple-user-contacts-csv.component';

describe('EventsCreateMultipleUserContactsCsvComponent', () => {
  let component: EventsCreateMultipleUserContactsCsvComponent;
  let fixture: ComponentFixture<EventsCreateMultipleUserContactsCsvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateMultipleUserContactsCsvComponent]
    });
    fixture = TestBed.createComponent(EventsCreateMultipleUserContactsCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
