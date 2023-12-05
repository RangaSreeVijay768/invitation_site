import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersSignOutComponent } from './users-sign-out.component';

describe('UsersSignOutComponent', () => {
  let component: UsersSignOutComponent;
  let fixture: ComponentFixture<UsersSignOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersSignOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
