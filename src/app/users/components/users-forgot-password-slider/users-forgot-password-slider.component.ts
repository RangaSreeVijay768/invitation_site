import { Component } from '@angular/core';
import {
  USERS_FORGOT_PASSWORD_FORM_LAYOUT,
  USERS_FORGOT_PASSWORD_FORM_MODEL,
  USERS_START_LOGIN_USER_FORM_LAYOUT
} from '@users/users.form.models';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';

@Component({
  selector: 'users-forgot-password-slider',
  templateUrl: './users-forgot-password-slider.component.html',
  styleUrls: ['./users-forgot-password-slider.component.scss']
})
export class UsersForgotPasswordSliderComponent extends FormComponent {

  formLayout = USERS_FORGOT_PASSWORD_FORM_LAYOUT;

  afterInitializeComponent() {
  }

  getFormModel(): DynamicFormControlModel[] {
    return USERS_FORGOT_PASSWORD_FORM_MODEL();
  }

  initializeComponent() {
  }
}
