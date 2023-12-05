import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsersLogoutModalContentComponent } from './basic-users-logout-modal-content.component';

describe('BasicUsersLogoutModalContentComponent', () => {
  let component: BasicUsersLogoutModalContentComponent;
  let fixture: ComponentFixture<BasicUsersLogoutModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUsersLogoutModalContentComponent]
    });
    fixture = TestBed.createComponent(BasicUsersLogoutModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
