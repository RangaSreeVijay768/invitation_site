import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent } from './events-event-dashboard-guest-details-refund-requests-search-form.component';

describe('EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent', () => {
  let component: EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent;
  let fixture: ComponentFixture<EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent]
    });
    fixture = TestBed.createComponent(EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
