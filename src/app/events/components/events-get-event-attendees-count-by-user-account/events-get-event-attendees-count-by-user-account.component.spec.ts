import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventAttendeesCountByUserAccountComponent } from './events-get-event-attendees-count-by-user-account.component';

describe('EventsGetEventAttendeesCountByUserAccountComponent', () => {
  let component: EventsGetEventAttendeesCountByUserAccountComponent;
  let fixture: ComponentFixture<EventsGetEventAttendeesCountByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventAttendeesCountByUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventAttendeesCountByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
