import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchEventInfosFormComponent } from './events-search-event-infos-form.component';

describe('EventsSearchEventInfosFormComponent', () => {
  let component: EventsSearchEventInfosFormComponent;
  let fixture: ComponentFixture<EventsSearchEventInfosFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsSearchEventInfosFormComponent]
    });
    fixture = TestBed.createComponent(EventsSearchEventInfosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
