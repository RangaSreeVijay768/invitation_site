import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetEventInviteAndEventInfosByUserAccountComponent } from './events-get-event-invite-and-event-infos-by-user-account.component';

describe('EventsGetEventInviteAndEventInfosByUserAccountComponent', () => {
  let component: EventsGetEventInviteAndEventInfosByUserAccountComponent;
  let fixture: ComponentFixture<EventsGetEventInviteAndEventInfosByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetEventInviteAndEventInfosByUserAccountComponent]
    });
    fixture = TestBed.createComponent(EventsGetEventInviteAndEventInfosByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
