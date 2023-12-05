import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShareEventConfirmationModalContentComponent } from './events-share-event-confirmation-modal-content.component';

describe('EventsShareEventConfirmationModalContentComponent', () => {
  let component: EventsShareEventConfirmationModalContentComponent;
  let fixture: ComponentFixture<EventsShareEventConfirmationModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventConfirmationModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventConfirmationModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
