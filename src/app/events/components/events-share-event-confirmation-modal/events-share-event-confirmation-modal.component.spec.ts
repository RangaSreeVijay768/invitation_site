import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShareEventConfirmationModalComponent } from './events-share-event-confirmation-modal.component';

describe('EventsShareEventConfirmationModalComponent', () => {
  let component: EventsShareEventConfirmationModalComponent;
  let fixture: ComponentFixture<EventsShareEventConfirmationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventConfirmationModalComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventConfirmationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
