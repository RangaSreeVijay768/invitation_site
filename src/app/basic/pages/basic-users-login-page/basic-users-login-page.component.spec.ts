import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUsersLoginPageComponent } from './basic-users-login-page.component';

describe('BasicUsersLoginPageComponent', () => {
  let component: BasicUsersLoginPageComponent;
  let fixture: ComponentFixture<BasicUsersLoginPageComponent>;

  beforeEach(async () => {
    // @ts-ignore
    await TestBed.configureTestingModule({
      declarations: [ BasicUsersLoginPageComponent ]
    })
    .compileComponents();

    // @ts-ignore
    fixture = TestBed.createComponent(BasicUsersLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
