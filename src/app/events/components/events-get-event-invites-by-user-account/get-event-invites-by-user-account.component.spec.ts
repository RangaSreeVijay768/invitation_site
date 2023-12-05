import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEventInvitesByUserAccountComponent } from './get-event-invites-by-user-account.component';

describe('GetEventInvitesByUserAccountComponent', () => {
  let component: GetEventInvitesByUserAccountComponent;
  let fixture: ComponentFixture<GetEventInvitesByUserAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetEventInvitesByUserAccountComponent]
    });
    fixture = TestBed.createComponent(GetEventInvitesByUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
