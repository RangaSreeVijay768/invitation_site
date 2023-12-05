import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersStartLoginFormComponent } from './users-start-login-form.component';

describe('UsersStartLoginFormComponent', () => {
  let component: UsersStartLoginFormComponent;
  let fixture: ComponentFixture<UsersStartLoginFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersStartLoginFormComponent]
    });
    fixture = TestBed.createComponent(UsersStartLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
