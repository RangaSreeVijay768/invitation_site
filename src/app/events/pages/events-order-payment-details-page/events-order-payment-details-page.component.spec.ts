import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsOrderPaymentDetailsPageComponent } from './events-order-payment-details-page.component';

describe('EventsOrderPaymentDetailsPageComponent', () => {
  let component: EventsOrderPaymentDetailsPageComponent;
  let fixture: ComponentFixture<EventsOrderPaymentDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsOrderPaymentDetailsPageComponent]
    });
    fixture = TestBed.createComponent(EventsOrderPaymentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
