import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsersSignUpPageComponent } from './basic-users-sign-up-page.component';

describe('BasicUsersSignUpPageComponent', () => {
  let component: BasicUsersSignUpPageComponent;
  let fixture: ComponentFixture<BasicUsersSignUpPageComponent>;

  beforeEach(async () => {
    // @ts-ignore
    await TestBed.configureTestingModule({
      declarations: [ BasicUsersSignUpPageComponent ]
    })
    .compileComponents();

    // @ts-ignore
    fixture = TestBed.createComponent(BasicUsersSignUpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
