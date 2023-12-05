import {CommonsService} from "@core/commons.service";

export const NOTIFICATION_MODULE_CONSTANTS = {
    timeOut: 5000,
    maxStack: 3,
    showProgressBar: false,
    position: ['top', 'right']
};

export const FORM_VALIDATIONS = {
    EMAIL_VALIDATOR: {validator: 'emailValidator', errorMessage: 'Invalid e-mail'},
    MOBILE_VALIDATOR: {validator: 'mobileNumberValidator', errorMessage: 'Invalid mobile number'},
    PASSWORD_VALIDATOR: {
        validator: 'jeewithPasswordValidator',
        errorMessage: 'Password should contain minimum of 6 characters with atleast one number,one lowercase letter'
    },
    MIN_VALIDATOR: {validator: 'min', errorMessage: 'Minimum value ({{min}})'},
    MAX_VALIDATOR: {validator: 'max', errorMessage: 'Maximum value ({{max}})'},
    REQUIRED: {validator: 'required', errorMessage: 'Required '},
    MAXLENGTH: {validator: 'maxLength', errorMessage: 'Max length exceeded'},
    MINLENGTH: {validator: 'minLength', errorMessage: 'Min length required'},
};

export const PROMISE_BUTTON_MODULE_OPTIONS = {
    spinnerTpl: '<img src="/assets/images/loading_spinner.gif" class="spinner w-1">',
    // disable buttons when promise is pending
    disableBtn: true,
    // the class used to indicate a pending promise
    btnLoadingClass: 'is-loading',
    // only disable and show is-loading class for clicked button,
    // even when they share the same promise
    handleCurrentBtnOnly: true,
};

export const DEFAULT_SLIDE_OPTIONS = {
    INITIAL_SLIDE: 0,
    SPEED: 400
};

export const TOKEN_VALIDITY_SECONDS = 60 * 60 * 24 * 6;

export const CAMPIAGN_CATEGORY_INTERFACES = [
    {
        "value": 1,
        "name": "ArtsAndCulture",
        "description": "Arts & Culture"
    },
    {
        "value": 2,
        "name": "Education",
        "description": "Education"
    },
    {
        "value": 3,
        "name": "Community",
        "description": "Community"
    },
    {
        "value": 4,
        "name": "Commerce",
        "description": "Commerce"
    },
    {
        "value": 5,
        "name": "HealthandWellness",
        "description": "Health and Wellness"
    },
    {
        "value": 6,
        "name": "Media",
        "description": "Media"
    },
    {
        "value": 7,
        "name": "Justforfun",
        "description": "Just for fun"
    }
]

export class MetaConstants {

    public static DEFAULT_TITLE = 'EventReply | New way of hosting events';
    public static DEFAULT_DESCRIPTION = 'New way of hosting events';
    public static DEFAULT_TYPE = 'website';
    public static WEBSITE_URL = CommonsService.getWindowLocation();
    public static DEFAULT_IMAGE = MetaConstants.WEBSITE_URL + '/assets/images/logo 2 1.png';

    // public static DEFAULT_TITLE = 'Testing campaign';
    // public static DEFAULT_DESCRIPTION = 'Testin campaign 2';
    // public static DEFAULT_TYPE = 'website';
    // public static WEBSITE_URL = 'https://upraise.fund';
    // public static DEFAULT_IMAGE = 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png';

}
