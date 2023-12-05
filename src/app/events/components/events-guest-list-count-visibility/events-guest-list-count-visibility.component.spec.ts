import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsGuestListCountVisibilityComponent } from './events-guest-list-count-visibility.component';

describe('EventsGuestListCountVisibilityComponent', () => {
  let component: EventsGuestListCountVisibilityComponent;
  let fixture: ComponentFixture<EventsGuestListCountVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsGuestListCountVisibilityComponent]
    });
    fixture = TestBed.createComponent(EventsGuestListCountVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
