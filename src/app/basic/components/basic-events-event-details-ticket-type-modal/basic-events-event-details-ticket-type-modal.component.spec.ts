import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEventsEventDetailsTicketTypeModalComponent } from './basic-events-event-details-ticket-type-modal.component';

describe('BasicEventsEventDetailsTicketTypeModalComponent', () => {
  let component: BasicEventsEventDetailsTicketTypeModalComponent;
  let fixture: ComponentFixture<BasicEventsEventDetailsTicketTypeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEventsEventDetailsTicketTypeModalComponent]
    });
    fixture = TestBed.createComponent(BasicEventsEventDetailsTicketTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
