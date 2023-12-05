import {DynamicFormControlLayout, serializable} from '@ng-dynamic-forms/core';
import {
    CoreTagInputModel, CoreTagInputModelConfig
} from "@core/components/forms/core-tag-input-form-control/core-tag-input.model";

export const FORM_CONTROL_TYPE_<%= underscore(name).toUpperCase() %>_TAG_INPUT = '<%= underscore(name).toUpperCase() %>_TAG_INPUT';

export interface <%= classify(name) %>TagInputModelConfig extends CoreTagInputModelConfig<T[]> {
    // id:string
}


export class <%= classify(name) %>TagModelInput<T> extends CoreTagInputModel<T[]> {
    @serializable() readonly type: string = FORM_CONTROL_TYPE_<%= underscore(name).toUpperCase() %>_TAG_INPUT;

    // @serializable()
//  id: string;

    constructor(config: <%= classify(name) %>TagInputModelConfig, layout?: DynamicFormControlLayout) {
        super(config, layout);
        // this.id = config.id;
        this.tagIdentifyBy = config.tagIdentifyBy || 'id';
        this.tagDisplayBy = config.tagDisplayBy || 'name';
        this.autoCompleteDisplayBy = config.autoCompleteDisplayBy || 'title';
        this.autoCompleteIdentifyBy = config.autoCompleteIdentifyBy || 'id';
    }
}
