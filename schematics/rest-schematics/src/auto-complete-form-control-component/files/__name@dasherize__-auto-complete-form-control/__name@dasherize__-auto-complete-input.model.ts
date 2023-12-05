import {DynamicFormControlLayout, serializable} from '@ng-dynamic-forms/core';
import {
    CoreAutoCompleteInputConfig, CoreAutoCompleteInputModel
} from '@core/components/forms/core-auto-complete-form-control/core-autocomplete-input.model';

export const FORM_CONTROL_TYPE_<%= underscore(name).toUpperCase() %>_AUTOCOMPLETE_INPUT = '<%= underscore(name).toUpperCase() %>_AUTOCOMPLETE_INPUT';

export interface <%= classify(name) %>AutoCompleteInputModelConfig extends CoreAutoCompleteInputConfig<T> {
    // id:string
}


export class <%= classify(name) %>AutoCompleteInputModel<T> extends CoreAutoCompleteInputModel<T> {
    @serializable() readonly type: string = FORM_CONTROL_TYPE_<%= underscore(name).toUpperCase() %>_AUTOCOMPLETE_INPUT;

    // @serializable()
//  id: string;

    constructor(config: <%= classify(name) %>AutoCompleteInputModelConfig, layout?: DynamicFormControlLayout) {
        super(config, layout);
    }
}
