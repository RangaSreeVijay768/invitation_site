import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsShowGuestListCountVisibilityComponent } from './events-show-guest-list-count-visibility.component';

describe('EventsShowGuestListCountVisibilityComponent', () => {
  let component: EventsShowGuestListCountVisibilityComponent;
  let fixture: ComponentFixture<EventsShowGuestListCountVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsShowGuestListCountVisibilityComponent]
    });
    fixture = TestBed.createComponent(EventsShowGuestListCountVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
