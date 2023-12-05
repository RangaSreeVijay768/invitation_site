import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicUserInfoBeforeLoginForPaymentModalContentComponent } from './basic-user-info-before-login-for-payment-modal-content.component';

describe('BasicUserInfoBeforeLoginForPaymentModalContentComponent', () => {
  let component: BasicUserInfoBeforeLoginForPaymentModalContentComponent;
  let fixture: ComponentFixture<BasicUserInfoBeforeLoginForPaymentModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicUserInfoBeforeLoginForPaymentModalContentComponent]
    });
    fixture = TestBed.createComponent(BasicUserInfoBeforeLoginForPaymentModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
