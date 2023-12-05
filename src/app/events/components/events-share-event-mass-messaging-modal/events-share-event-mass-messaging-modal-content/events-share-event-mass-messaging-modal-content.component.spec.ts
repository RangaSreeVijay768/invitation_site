import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShareEventMassMessagingModalContentComponent } from './events-share-event-mass-messaging-modal-content.component';

describe('EventsShareEventMassMessagingModalContentComponent', () => {
  let component: EventsShareEventMassMessagingModalContentComponent;
  let fixture: ComponentFixture<EventsShareEventMassMessagingModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventMassMessagingModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventMassMessagingModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
