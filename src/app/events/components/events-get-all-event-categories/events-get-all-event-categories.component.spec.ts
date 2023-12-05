import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGetAllEventCategoriesComponent } from './events-get-all-event-categories.component';

describe('EventsGetAllEventCategoriesComponent', () => {
  let component: EventsGetAllEventCategoriesComponent;
  let fixture: ComponentFixture<EventsGetAllEventCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGetAllEventCategoriesComponent]
    });
    fixture = TestBed.createComponent(EventsGetAllEventCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
