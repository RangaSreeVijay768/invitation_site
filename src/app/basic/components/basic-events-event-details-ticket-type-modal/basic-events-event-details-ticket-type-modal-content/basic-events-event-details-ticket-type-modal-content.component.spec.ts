import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEventsEventDetailsTicketTypeModalContentComponent } from './basic-events-event-details-ticket-type-modal-content.component';

describe('BasicEventsEventDetailsTicketTypeModalContentComponent', () => {
  let component: BasicEventsEventDetailsTicketTypeModalContentComponent;
  let fixture: ComponentFixture<BasicEventsEventDetailsTicketTypeModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicEventsEventDetailsTicketTypeModalContentComponent]
    });
    fixture = TestBed.createComponent(BasicEventsEventDetailsTicketTypeModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
