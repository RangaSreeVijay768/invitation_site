import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsEventPurchaseDetailsPageComponent } from './events-event-purchase-details-page.component';

describe('EventsEventPurchaseDetailsPageComponent', () => {
  let component: EventsEventPurchaseDetailsPageComponent;
  let fixture: ComponentFixture<EventsEventPurchaseDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsEventPurchaseDetailsPageComponent]
    });
    fixture = TestBed.createComponent(EventsEventPurchaseDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
