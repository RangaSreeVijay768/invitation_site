import {AbstractControl, ValidationErrors} from '@angular/forms';
import validator from 'validator';
import passwordValidator from 'password-validator';

export namespace FormValidations {

    export function emailValidator(control: AbstractControl): ValidationErrors | null {
        // validator does not accept null
        const hasError = validator.isEmail(control.value ? control.value : '');

        return hasError ? null : {emailValidator: true};
    }

    export function mobileNumberValidator(control: AbstractControl): ValidationErrors | null {
        const hasError = validator.isMobilePhone(control.value ? control.value : '');
        return hasError ? null : {mobileNumberValidator: true};
    }

    export function appPasswordValidator(control: AbstractControl): ValidationErrors | null {

        const schema = new passwordValidator();

        schema
            .is().min(6)                                    // Minimum length 8
            .is().max(100)                                  // Maximum length 100
            .has().lowercase()                              // Must have lowercase letters
            .has().digits()                                 // Must have digits
            .has().not().spaces();                           // Should not have spaces

        const isValid = control.value ? (schema.validate(control.value)) : false;

        return isValid ? null : {appPasswordValidator: true};
    }


}

