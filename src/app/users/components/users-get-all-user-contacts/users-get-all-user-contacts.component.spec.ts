import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGetAllUserContactsComponent } from './users-get-all-user-contacts.component';

describe('UsersGetAllUserContactsComponent', () => {
  let component: UsersGetAllUserContactsComponent;
  let fixture: ComponentFixture<UsersGetAllUserContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersGetAllUserContactsComponent]
    });
    fixture = TestBed.createComponent(UsersGetAllUserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
