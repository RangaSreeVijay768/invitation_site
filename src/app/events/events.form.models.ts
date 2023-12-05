import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {DynamicInputModelBuilder} from '@core/dynamic-input-model-builder';
import {CommonsService} from '@core/commons.service';
import {
    EventsSearchEventInfosAutoCompleteInputModel
} from '@events/components/events-search-event-infos-auto-complete-form-control/events-search-event-infos-auto-complete-input.model';
import {
    CoreGoogleAddressAutoCompletionModel
} from "@core/components/forms/core-google-address-auto-completion-form-control/core-google-address-auto-completion-form-control.model";

export function EVENTS_CREATE_EVENT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('event_title', undefined, undefined, ' ')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('organizer', undefined, undefined, ' ')
            .build(),
        new DynamicInputModelBuilder()
            .inputModel(new CoreGoogleAddressAutoCompletionModel({id: 'location'}))
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('start_date', undefined, '07/23/2023', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('start_time', undefined, undefined, undefined, false)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('end_date', undefined, '07/23/2024', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/MM/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('end_time', undefined, undefined, undefined, false)
            .build(),
        new DynamicInputModelBuilder()
            .getRadioGroupInputModel('location_type', undefined, [
                {label: '   In Person', value: 'OFFLINE'},
                {label: '   Online', value: 'ONLINE'},
            ], 'OFFLINE')
            .build(),
        new DynamicInputModelBuilder()
            .inputModel(new CoreGoogleAddressAutoCompletionModel({id: 'location_type1'}))
            .build(),

        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('location_visibility', undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('location_availability_status', undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('event_timings_availability_status', undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('event_description', undefined, 'Tell us something about the event...', 5, undefined,
                undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('invitation_policy', undefined, [
                {label: 'Everyone can invite guests', value: 'EVERYONE'},
                {label: 'Only Hosts can invite guests', value: 'HOSTS'},
                {label: 'Both Hosts and invities can invite guests ', value: 'HOSTS_AND_INVITEES'},
            ], 'EVERYONE' )
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('event_category', '', [
                {label: 'Night life', value: 'NIGHT_LIFE'},
                {label: 'Concert/Festival', value: 'CONCERT_OR_FESTIVAL'},
                {label: 'Seminar/Workshop', value: 'SEMINAR_OR_WORKSHOP'},
                {label: 'Exhibit/Show', value: 'EXHIBIT_OR_SHOW'},
                {label: 'Networking', value: 'NETWORKING'},
                {label: 'Happy hour', value: 'HAPPY_HOUR'},
                {label: 'House party', value: 'HOUSE_PARTY'},
                {label: 'Birthday party', value: 'BIRTHDAY_PARTY'},
                {label: 'Other...', value: 'OTHER'},
            ], 'NIGHT_LIFE')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('guest_list_visibility', '', [
                {label: 'Only hosts can invite guests', value: 'ONLY_HOSTS_CAN_INVITE_GUESTS'},
                {label: 'Invitees can invite guests', value: 'INVITEES_CAN_INVITE_GUESTS'},
            ], 'Private')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('hide_guest_list', undefined)
            .build(),
    ];
}

export const EVENTS_CREATE_EVENT_FORM_LAYOUT = {
    event_title: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    organizer: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    location: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px border-if-filled',
            container: ''
        }
    },
    start_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1 rounded-2',
            container: ''
        }
    },
    start_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    end_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1 rounded-2',
            container: ''
        }
    },
    end_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px  placeholder-grey-1',
            container: ''
        }
    },
    location_type: {
        element: {
          options: {
            label: 'font-size-32 font-weight-700 ',
          },
            label: 'font-size-32 font-weight-700 ',
            container: 'font-size-32 font-weight-700'
        }
    },
    location_type1: {
        element: {
            control: 'font-weight-500 py-21px ph-16px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    event_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    event_category: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2 ',
            container: ''
        }
    },
    invitation_policy: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2 ',
            container: ''
        }
    },
    visibility: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2 '
        }
    },

    location_availability_status: {
        element: {
            control: 'formCheckbox specifyColor w-27 h-27 font-poppins mr-16px',
            container: ''
        }
    },
    location_visibility: {
        element: {
            control: 'formCheckbox specifyColor w-27 h-27 font-poppins mr-16px',
            container: ''
        }
    },
    event_timings_availability_status: {
        element: {
            control: 'formCheckbox specifyColor w-27 h-27 font-poppins mr-16px',
            container: ''
        }
    },

    guest_list_visibility: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2',
            container: ''
        }
    },
    hide_guest_list: {
        element: {
            control: 'formCheckbox specifyColor w-27 h-27 font-poppins mr-16px',
            container: ''
        }
    },
};

export function EVENTS_CREATE_EVENT_FREE_TICKET_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('ticket_description', undefined, 'Tell us something about the event...', 5,
                undefined, undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_name', undefined, undefined, 'Enter any name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('total_quantity', undefined, undefined, 'Ex. 20')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_start_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_end_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_start_date', undefined, 'Starting date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_end_date', undefined, 'Ending date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),

    ];
}

export function EVENTS_UPDATE_EVENT_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('event_title', undefined, undefined, ' ')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('organizer_or_host_name', undefined, undefined, ' ')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('location', undefined, undefined, ' ')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('start_date', undefined, '2023-07-23', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('start_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('end_date', undefined, '2023-07-24', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/MM/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('end_time', undefined, undefined, 'End time')
            .build(),
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('event_description', undefined, 'Tell us something about the event...', 5, undefined,
                undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('event_category', '', [
                {label: 'Night life', value: 'NIGHT_LIFE'},
                {label: 'Concert/Festival', value: 'CONCERT_OR_FESTIVAL'},
                {label: 'Seminar/Workshop', value: 'SEMINAR_OR_WORKSHOP'},
                {label: 'Exhibit/Show', value: 'EXHIBIT_OR_SHOW'},
                {label: 'Networking', value: 'NETWORKING'},
                {label: 'Happy hour', value: 'HAPPY_HOUR'},
                {label: 'House party', value: 'HOUSE_PARTY'},
                {label: 'Birthday party', value: 'BIRTHDAY_PARTY'},
                {label: 'Other...', value: 'OTHER'},
            ], 'NIGHT_LIFE')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('guest_list_visibility', '', [
                {label: 'Only hosts can invite guests', value: 'ONLY_HOSTS_CAN_INVITE_GUESTS'},
                {label: 'Invitees can invite guests', value: 'INVITEES_CAN_INVITE_GUESTS'},
            ], 'Private')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('hide_guest_list', undefined)
            .build(),
    ];
}

export const EVENTS_UPDATE_EVENT_FORM_LAYOUT = {
    event_title: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    organizer_or_host_name: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px font-size-18 border-if-filled',
            container: ''
        }
    },
    location: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px border-if-filled',
            container: ''
        }
    },
    start_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1 rounded-2',
            container: ''
        }
    },
    start_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    end_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px placeholder-grey-1 rounded-2',
            container: ''
        }
    },
    end_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px  placeholder-grey-1',
            container: ''
        }
    },
    event_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px resize-none font-size-18 border-if-filled',
            container: ''
        }
    },
    event_category: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2 ',
            container: ''
        }
    },
    guest_list_visibility: {
        element: {
            control: 'font-weight-500 font-size-18 py-21px border border-2 border-grey-1 ph-16px rounded-2',
            container: ''
        }
    },
    hide_guest_list: {
        element: {
            control: 'formCheckbox specifyColor w-27 h-27 font-poppins mr-16px',
            container: ''
        }
    },
};

export const EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT = {
    ticket_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px resize-none',
            container: ''
        }
    },
    ticket_name: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    total_quantity: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },


};

export function EVENTS_CREATE_EVENT_PAID_TICKET_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('available_quantity', 'Available quantity', undefined, 'available quantity')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        // new DynamicInputModelBuilder()
        //   .getSelectInputModel('available_ticket_quantity_status', 'Available ticket quantity status', [
        //     {label: 'Accept', value: 'ACCEPT'},
        //     {label: 'Active', value: 'ACTIVE'},
        //     {label: 'Completed', value: 'COMPLETED'},
        //     {label: 'Created', value: 'CREATED'},
        //     {label: 'Disabled', value: 'DISABLED'},
        //     {label: 'Expired', value: 'EXPIRED'},
        //     {label: 'Pending', value: 'PENDING'},
        //     {label: 'Pending approval', value: 'PENDING_APPROVAL'},
        //     {label: 'Reject', value: 'REJECT'},
        //   ], 'ACCEPT')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),
        // new DynamicInputModelBuilder()
        //   .getTextInputModel('event', 'Event', undefined, 'event')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),

        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_name', undefined, undefined, 'Enter any name')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_price', undefined, undefined, 'Enter price')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('total_quantity', undefined, undefined, 'Enter quantity')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
          .build(),
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('ticket_description', undefined, 'Tell us something about the event...', 5,
                undefined, undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_start_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_end_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_start_date', undefined, 'Starting date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_end_date', undefined, 'Ending date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_start', undefined, undefined, '0')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_end', undefined, undefined, '50')
            .build(),
    ];
}

export const EVENTS_CREATE_EVENT_PAID_TICKET_FORM_LAYOUT = {

    ticket_name: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    ticket_price: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    total_quantity: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    ticket_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px resize-none',
            container: ''
        }
    },
    sale_start_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_start_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    sale_end_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_end_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    set_purchase_quantity_end: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    set_purchase_quantity_start: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
};

export function EVENTS_EDIT_EVENT_TICKET_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('available_quantity', 'Available quantity', undefined, 'available quantity')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        // new DynamicInputModelBuilder()
        //   .getSelectInputModel('available_ticket_quantity_status', 'Available ticket quantity status', [
        //     {label: 'Accept', value: 'ACCEPT'},
        //     {label: 'Active', value: 'ACTIVE'},
        //     {label: 'Completed', value: 'COMPLETED'},
        //     {label: 'Created', value: 'CREATED'},
        //     {label: 'Disabled', value: 'DISABLED'},
        //     {label: 'Expired', value: 'EXPIRED'},
        //     {label: 'Pending', value: 'PENDING'},
        //     {label: 'Pending approval', value: 'PENDING_APPROVAL'},
        //     {label: 'Reject', value: 'REJECT'},
        //   ], 'ACCEPT')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),
        // new DynamicInputModelBuilder()
        //   .getTextInputModel('event', 'Event', undefined, 'event')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),
        new DynamicInputModelBuilder()
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .getTextAreaInputModel('ticket_description', undefined, 'Tell us something about the event...', 5,
                undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_name', undefined, undefined, 'Enter any name')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_price', undefined, undefined, 'Enter price')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('total_quantity', undefined, undefined, 'Enter quantity')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_start_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_end_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_start_date', undefined, 'Starting date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_end_date', undefined, 'Ending date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_start', undefined, undefined, '0')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_end', undefined, undefined, '50')
            .build(),

    ];
}

export const EVENTS_EDIT_EVENT_TICKET_FORM_LAYOUT = {
    ticket_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px resize-none bg-grey-3',
            container: ''
        }
    },
    ticket_name: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px bg-grey-3',
            container: ''
        }
    },
    ticket_price: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px bg-grey-3',
            container: ''
        }
    },
    total_quantity: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },

    sale_start_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_start_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    sale_end_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_end_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    set_purchase_quantity_end: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px bg-grey-3',
            container: ''
        }
    },
    set_purchase_quantity_start: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px bg-grey-3',
            container: ''
        }
    },

};


export function EVENTS_EVENT_DASHBOARD_PROMOCODES_CREATE_CODE_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('promo_code', undefined, undefined, 'First Code/Any Name ')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('total_quantity', undefined, undefined, ' Ex.20')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('discount_amount_flat', undefined, undefined, '$')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('discount_amount_percentage', undefined, undefined, '%')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('start_time', undefined, '2023-07-23', CommonsService.getCurrentTimeAsDateTime())
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('end_time', undefined, '2023-07-24', CommonsService.getCurrentTimeAsDateTime())
            .build(),
    ];
}

export const EVENTS_EVENT_DASHBOARD_PROMO_CODES_CREATE_CODE_FORM_LAYOUT = {
    promo_code: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    total_quantity: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    discount_amount_flat: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    discount_amount_percentage: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    start_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px',
            container: ''
        }
    },
    end_time: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-10px',
            container: ''
        }
    },
};

export function EVENTS_SEARCH_EVENT_INFOS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .inputModel(new EventsSearchEventInfosAutoCompleteInputModel(
                {id: 'query', keyword: 'event.event_title', placeholder: 'Search events'}))
            .build(),
    ];
}


export const EVENTS_SEARCH_EVENT_INFOS_FORM_LAYOUT = {
    query: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 px-0 mt-20px search-event-form-control',
            container: ''
        }
    },
};


export function EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_member', undefined, undefined, 'Search Member')
            .build(),
    ];
}

export const EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 border border-2 border-grey-1 b-1px-primary mt-20px filter-none w-100 h-100 p-24px pl-30px font-size-18px',
            container: 'filter-none b-1px-primary p-24px pl-30px br-1px-grey-2 font-size-18px'
        }
    },
};

export function EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_ALL_GUEST_SEARCH_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_member', undefined, undefined, 'Search Member')
            .build(),
    ];
}

export const EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_ALL_GUEST_SEARCH_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 mt-20px filter-none w-100 h-100 p-24px font-size-18px',
            container: 'filter-none p-24px font-size-18px'
        }
    },
};

export function EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_member', undefined, undefined, 'Search Member')
            .build(),
    ];
}

export const EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 mt-20px filter-none w-100 h-100 p-24px font-size-18px',
            container: 'filter-none p-24px font-size-18px'
        }
    },
};

export function EVENTS_EVENT_DASHBOARD_MANAGE_GUEST_CHECKEDIN_SEARCH_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_member', undefined, undefined, 'Search Member')
            .build(),
    ];
}

export const EVENTS_EVENT_DASHBOARD_MANAGE_GUEST_CHECKEDIN_SEARCH_FORM_LAYOUT = {
    search_member: {
        element: {
            control: 'font-weight-500 mt-20px filter-none w-100 h-100 p-24px font-size-18px',
            container: 'filter-none p-24px font-size-18px'
        }
    },
};

export function EVENTS_CO_HOST_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getCheckBoxInputModel('co_host_status', undefined)
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
    ]
}

export function EVENTS_LOCATION_AVAILABILITY_STATUS_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getCheckBoxInputModel('location_availability_status', undefined)
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ]
}

export function EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('available_quantity', 'Available quantity', undefined, 'available quantity')
            .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        // new DynamicInputModelBuilder()
        //   .getSelectInputModel('available_ticket_quantity_status', 'Available ticket quantity status', [
        //     {label: 'Accept', value: 'ACCEPT'},
        //     {label: 'Active', value: 'ACTIVE'},
        //     {label: 'Completed', value: 'COMPLETED'},
        //     {label: 'Created', value: 'CREATED'},
        //     {label: 'Disabled', value: 'DISABLED'},
        //     {label: 'Expired', value: 'EXPIRED'},
        //     {label: 'Pending', value: 'PENDING'},
        //     {label: 'Pending approval', value: 'PENDING_APPROVAL'},
        //     {label: 'Reject', value: 'REJECT'},
        //   ], 'ACCEPT')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),
        // new DynamicInputModelBuilder()
        //   .getTextInputModel('event', 'Event', undefined, 'event')
        //   .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
        //   .build(),

        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_name', undefined, undefined, 'Enter any name')
          .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('ticket_price', undefined, undefined, 'Enter price')
          .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('total_quantity', undefined, undefined, 'Enter quantity')
          .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTextAreaInputModel('ticket_description', undefined, 'Tell us something about the event...', 5,
                undefined, undefined)
          .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_start_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getTimeInputModel('sale_end_time', undefined, undefined)
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_start_date', undefined, 'Starting date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getDateInputModel('sale_end_date', undefined, 'Ending date', CommonsService.getCurrentTimeAsDateTime(),
                undefined, undefined, 'dd/mm/yyyy')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_start', undefined, undefined, '0')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('set_purchase_quantity_end', undefined, undefined, '50')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('item_actual_price', undefined, undefined, '0')
            .build(),
        new DynamicInputModelBuilder()
            .getTextInputModel('item_current_price', undefined, undefined, '50')
            .build(),
    ];
}

export const EVENTS_CREATE_EVENT_TICKET_AND_EVENT_TICKET_SALE_ITEM_FORM_LAYOUT = {

    ticket_name: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    ticket_price: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    total_quantity: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    ticket_description: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px py-10px mt-20px resize-none',
            container: ''
        }
    },
    sale_start_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_start_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    sale_end_time: {
        element: {
            control: 'font-weight-500 border-none border-grey-1 ph-10px placeholder-grey-1',
            container: ''
        }
    },
    sale_end_date: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    set_purchase_quantity_end: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    set_purchase_quantity_start: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    item_actual_price: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },
    item_current_price: {
        element: {
            control: 'font-weight-500 py-21px border border-2 border-grey-1 ph-16px mt-20px',
            container: ''
        }
    },

};

export function EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_MODEL(headers_array: string[]): DynamicFormControlModel[] {
    const headers_array_options = headers_array.map(header => {
        return {
            label: header, value: header
        };
    });
    return [
        new DynamicInputModelBuilder()
          .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
            .getSelectInputModel('name', '', headers_array_options, headers_array[0])
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('email_id', '', headers_array_options, headers_array[0])
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('phone_number', '', headers_array_options, headers_array[0])
            .build(),
        new DynamicInputModelBuilder()
            .getSelectInputModel('whatsapp_number', '', headers_array_options, headers_array[0])
            .build()
    ];
}


export const EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_LAYOUT = {

    name: {
        element: {
            control: 'font-weight-500 border border-2 br-5px border-grey-1 ph-16px',
            container: ''
        }
    },
    email_id: {
        element: {
            control: 'font-weight-500 border border-2 br-5px border-grey-1 ph-16px',
            container: ''
        }
    },
    phone_number: {
        element: {
            control: 'font-weight-500 border border-2 br-5px border-grey-1 ph-16px',
            container: ''
        }
    },
    whatsapp_number: {
        element: {
            control: 'font-weight-500 border border-2 br-5px border-grey-1 ph-16px',
            container: ''
        }
    },

};

export function EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_MODEL(): DynamicFormControlModel[] {
  return [
    new DynamicInputModelBuilder()
      .getTextAreaInputModel('message', undefined, 'Message', 5,)
      .addValidatorAndErrorMessage('REQUIRED', 'placeholder')
      .build(),
  ];
}

export const EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_LAYOUT = {
  message: {
    element: {
      control: 'font-size-18 font-weight-500 py-16px b-1px-light-grey ph-16px mt-20px px-24px font-size-18px font-weight-400',
      container: ''
    }
  },

};
