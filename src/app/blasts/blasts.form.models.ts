import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {DynamicInputModelBuilder} from "@core/dynamic-input-model-builder";

export function BLASTS_SEARCH_BLAST_LISTS_FORM_MODEL(): DynamicFormControlModel[] {
    return [
        new DynamicInputModelBuilder()
            .getTextInputModel('search_term', undefined, undefined, 'Search groups')
            .build(),
    ];
}

export const BLASTS_SEARCH_BLAST_LISTS_FORM_LAYOUT = {
  search_term: {
    element: {
      control: 'font-weight-500 filter-none h-100 py-24px pl-50px font-size-18px',
      container: 'filter-none font-size-18px'
    }
  },
};
