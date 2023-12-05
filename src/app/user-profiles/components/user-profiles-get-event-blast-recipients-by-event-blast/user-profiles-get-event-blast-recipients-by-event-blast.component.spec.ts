import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilesGetEventBlastRecipientsByEventBlastComponent } from './user-profiles-get-event-blast-recipients-by-event-blast.component';

describe('UserProfilesGetEventBlastRecipientsByEventBlastComponent', () => {
  let component: UserProfilesGetEventBlastRecipientsByEventBlastComponent;
  let fixture: ComponentFixture<UserProfilesGetEventBlastRecipientsByEventBlastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserProfilesGetEventBlastRecipientsByEventBlastComponent]
    });
    fixture = TestBed.createComponent(UserProfilesGetEventBlastRecipientsByEventBlastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
