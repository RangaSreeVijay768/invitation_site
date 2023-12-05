import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardManageGuestCheckedinSearchFormComponent } from './events-event-dashboard-manage-guest-checkedin-search-form.component';

describe('EventsEventDashboardManageGuestCheckedinSearchFormComponent', () => {
  let component: EventsEventDashboardManageGuestCheckedinSearchFormComponent;
  let fixture: ComponentFixture<EventsEventDashboardManageGuestCheckedinSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardManageGuestCheckedinSearchFormComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardManageGuestCheckedinSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
