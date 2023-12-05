import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {auto} from '@popperjs/core';
import {CommonsService} from '@core/commons.service';
import {
  CoreGoogleAddressAutoCompletionModel
} from '@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model';

export function USERS_SIGN_IN_USER_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('email', undefined, undefined, 'Email address or phone number or whatsapp')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('password', undefined, undefined, 'Password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_SIGN_IN_USER_FORM_LAYOUT = {
  email: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },
  password: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },

};

export function USERS_SIGN_UP_MOBILE_EMAIL_PASSWORD_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('email', '', undefined, 'example@example.com')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('password', 'Password', undefined, 'password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('display_name', 'Display name', undefined, 'display name')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_SIGN_UP_MOBILE_EMAIL_PASSWORD_FORM_LAYOUT = {
  'email': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
  'password': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
  'display_name': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },

};

export function USERS_SIGN_UP_NAME_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('name', 'Full Name', undefined, 'First Last')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextAreaInputModel('bio', 1000, undefined, 5, 5, 'Bio')
      // .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_SIGN_UP_NAME_FORM_LAYOUT = {
  'name': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
  'bio': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
};

export function USERS_SIGN_UP_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('email', undefined, undefined, 'Enter email or phone number or whatsapp')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('password', undefined, undefined, 'Enter password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('display_name', undefined, undefined, 'Enter display name')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_SIGN_UP_FORM_LAYOUT = {
  'email': {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3 signup-form-input font-size-18px',
      container: 'my-0'
    }
  },
  'display_name': {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3 signup-form-input font-size-18px',
      container: 'my-0'
    }
  },
  'password': {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3 signup-form-input font-size-18px',
      container: 'my-0'
    }
  },


};

export function USERS_RESET_PASSWORD_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('password', 'Password', undefined, 'password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_RESET_PASSWORD_FORM_LAYOUT = {
  'first_name': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
};

export function USERS_CONTACT_US_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('name', 'Name', undefined, 'First Last')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('email', 'Email', undefined, 'example@email.com')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextAreaInputModel('message', 100, 'What’s up?', 5, 10, 'Message')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_CONTACT_US_FORM_LAYOUT = {
  'name': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
  'email': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
  'message': {
    element: {
      label: 'text-dark-text text-15px'
    },
    'grid': {
      control: 'mb-3 mt-1 rounded-1'
    }
  },
};

export function USERS_SEARCH_USERS_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('search_query', 'Search query', undefined, 'search query')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export function USERS_UPDATE_USER_ACCOUNT_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextAreaInputModel('bio', 1000, undefined, 3, 5, undefined)
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('email', '', undefined, 'example@gmail.com')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('name', '', undefined, 'Enter your name')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('mob_num', undefined, undefined, 'Ex.123456789')
      .build(),
    new DynamicInputModelBuilder()
      .getDateInputModel('b_day', undefined, 'Share to recieve special bday offers', undefined)
      .build(),
    // new DynamicInputModelBuilder()
    //   .getSelectInputModel('country', '', [
    //     {label: 'United States', value: 'US'},
    //     {label: 'Canada', value: 'CANADA'},
    //   ], 'US')
    //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
    //   .build(),
    // new DynamicInputModelBuilder()
    //   .getSelectInputModel('city', '', [
    //     {label: 'Seattle', value: 'SEATTLE'},
    //     {label: 'California', value: 'CALIFORNIA'},
    //   ], 'California')
    //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
    //   .build(),
    new DynamicInputModelBuilder()
      .inputModel(new CoreGoogleAddressAutoCompletionModel({id: 'country'}))
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('instagram', undefined, undefined, 'Ex: i.m.john')
      .build(),
  ];
}

export const USERS_UPDATE_USER_ACCOUNT_FORM_LAYOUT = {
  bio: {
    element: {
      control: 'font-size-18 font-weight-500 mt-20px border-none bio-edit-state px-0',
      container: 'px-0'
    }
  },
  email: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },
  name: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },
  mob_num: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px border-1px-white ph-16px',
      container: ''
    }
  },
  b_day: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },
  country: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },
  city: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },

  instagram: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },

};

export function USERS_VERIFY_USER_ACCOUNT_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code', undefined, undefined, undefined, undefined, '000000', false)
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_VERIFY_USER_ACCOUNT_LAYOUT = {
  verification_code: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px signup-form-input font-size-18px',
      container: ''
    }
  },
};

export function USERS_VERIFY_USER_ACCOUNT_LOGIN_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code', undefined, undefined, undefined, undefined, '000000', false)
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_VERIFY_USER_ACCOUNT_LOGIN_LAYOUT = {
  verification_code: {
    element: {
      control: 'font-size-18 font-weight-500 py-21px b-1px-light-grey ph-16px mt-20px',
      container: ''
    }
  },
};


export function USERS_START_LOGIN_USER_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('email', undefined, undefined, 'Enter phone number', undefined, undefined, undefined, undefined, '000 000 0000', false)
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('password', undefined, undefined, 'Password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_START_LOGIN_USER_FORM_LAYOUT = {
  email: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },
  password: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },

};

export function USERS_FORGOT_PASSWORD_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextInputModel('emailOrPhone', undefined, undefined, 'Email address or phone number or whatsapp')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('verification_code', undefined, undefined, 'Enter verification code', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('confirmNewPassword', undefined, undefined, 'Enter Password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
    new DynamicInputModelBuilder()
      .getTextInputModel('newPassword', undefined, undefined, 'Enter Password', 'password')
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const USERS_FORGOT_PASSWORD_FORM_LAYOUT = {
  emailOrPhone: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3 signup-form-input font-size-18px',
      container: ''
    }
  },
  verification_code: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },
  confirmNewPassword: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },
  newPassword: {
    element: {
      control: 'py-20px b-1px-light-grey ph-24px mt-16px color-black bg-grey-3  signup-form-input font-size-18px',
      container: ''
    }
  },
};
