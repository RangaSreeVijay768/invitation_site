import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLoginWithOtpSwiperComponent } from './users-login-with-otp-swiper.component';

describe('UsersLoginWithOtpSwiperComponent', () => {
  let component: UsersLoginWithOtpSwiperComponent;
  let fixture: ComponentFixture<UsersLoginWithOtpSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersLoginWithOtpSwiperComponent]
    });
    fixture = TestBed.createComponent(UsersLoginWithOtpSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
