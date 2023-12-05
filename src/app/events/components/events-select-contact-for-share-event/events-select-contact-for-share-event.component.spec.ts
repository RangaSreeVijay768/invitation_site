import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSelectContactForShareEventComponent } from './events-select-contact-for-share-event.component';

describe('EventsSelectContactForShareEventComponent', () => {
  let component: EventsSelectContactForShareEventComponent;
  let fixture: ComponentFixture<EventsSelectContactForShareEventComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSelectContactForShareEventComponent]
    });
    fixture = TestBed.createComponent(EventsSelectContactForShareEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
