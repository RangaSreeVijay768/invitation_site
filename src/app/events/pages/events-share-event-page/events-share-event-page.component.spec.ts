import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShareEventPageComponent } from './events-share-event-page.component';

describe('EventsShareEventPageComponent', () => {
  let component: EventsShareEventPageComponent;
  let fixture: ComponentFixture<EventsShareEventPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShareEventPageComponent]
    });
    fixture = TestBed.createComponent(EventsShareEventPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
