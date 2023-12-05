import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRemoveGuestListCountVisibilityComponent } from './events-remove-guest-list-count-visibility.component';

describe('EventsRemoveGuestListCountVisibilityComponent', () => {
  let component: EventsRemoveGuestListCountVisibilityComponent;
  let fixture: ComponentFixture<EventsRemoveGuestListCountVisibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsRemoveGuestListCountVisibilityComponent]
    });
    fixture = TestBed.createComponent(EventsRemoveGuestListCountVisibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
