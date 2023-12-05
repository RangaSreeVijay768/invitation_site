import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShareEventMassMessagingModalComponent } from './events-share-event-mass-messaging-modal.component';

describe('EventsShareEventMassMessagingModalComponent', () => {
  let component: EventsShareEventMassMessagingModalComponent;
  let fixture: ComponentFixture<EventsShareEventMassMessagingModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventMassMessagingModalComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventMassMessagingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
