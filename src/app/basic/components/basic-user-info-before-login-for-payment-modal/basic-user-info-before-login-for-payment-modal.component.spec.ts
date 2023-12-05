import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserInfoBeforeLoginForPaymentModalComponent } from './basic-user-info-before-login-for-payment-modal.component';

describe('BasicUserInfoBeforeLoginForPaymentModalComponent', () => {
  let component: BasicUserInfoBeforeLoginForPaymentModalComponent;
  let fixture: ComponentFixture<BasicUserInfoBeforeLoginForPaymentModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUserInfoBeforeLoginForPaymentModalComponent]
    });
    fixture = TestBed.createComponent(BasicUserInfoBeforeLoginForPaymentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
