import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardAllInvitesPageComponent } from './events-event-dashboard-all-invites-page.component';

describe('EventsEventDashboardAllInvitesPageComponent', () => {
  let component: EventsEventDashboardAllInvitesPageComponent;
  let fixture: ComponentFixture<EventsEventDashboardAllInvitesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardAllInvitesPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardAllInvitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
