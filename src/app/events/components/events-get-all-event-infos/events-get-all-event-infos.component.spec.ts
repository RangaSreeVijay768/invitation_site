import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventInfosComponent } from './events-get-all-event-infos.component';

describe('EventsGetAllEventInfosComponent', () => {
  let component: EventsGetAllEventInfosComponent;
  let fixture: ComponentFixture<EventsGetAllEventInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventInfosComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
