import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCreateEventInviteComponent } from './events-create-event-invite.component';

describe('EventsCreateEventInviteComponent', () => {
  let component: EventsCreateEventInviteComponent;
  let fixture: ComponentFixture<EventsCreateEventInviteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCreateEventInviteComponent]
    });
    fixture = TestBed.createComponent(EventsCreateEventInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
