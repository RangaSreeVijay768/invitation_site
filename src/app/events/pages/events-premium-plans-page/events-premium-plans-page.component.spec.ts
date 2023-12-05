import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPremiumPlansPageComponent } from './events-premium-plans-page.component';

describe('EventsPremiumPlansPageComponent', () => {
  let component: EventsPremiumPlansPageComponent;
  let fixture: ComponentFixture<EventsPremiumPlansPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsPremiumPlansPageComponent]
    });
    fixture = TestBed.createComponent(EventsPremiumPlansPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
