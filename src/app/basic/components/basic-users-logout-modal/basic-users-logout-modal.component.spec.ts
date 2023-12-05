import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsersLogoutModalComponent } from './basic-users-logout-modal.component';

describe('BasicUsersLogoutModalComponent', () => {
  let component: BasicUsersLogoutModalComponent;
  let fixture: ComponentFixture<BasicUsersLogoutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUsersLogoutModalComponent]
    });
    fixture = TestBed.createComponent(BasicUsersLogoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
