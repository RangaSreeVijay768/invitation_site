import {DynamicFormControlLayout, serializable} from '@ng-dynamic-forms/core';
import {
  CoreAutoCompleteInputConfig, CoreAutoCompleteInputModel
} from '@core/components/forms/core-auto-complete-form-control/core-autocomplete-input.model';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;

export const FORM_CONTROL_TYPE_EVENTS_SEARCH_EVENT_INFOS_AUTOCOMPLETE_INPUT = 'EVENTS_SEARCH_EVENT_INFOS_AUTOCOMPLETE_INPUT';

export interface EventsSearchEventInfosAutoCompleteInputModelConfig extends CoreAutoCompleteInputConfig<EventInfo> {
  // id:string
}


export class EventsSearchEventInfosAutoCompleteInputModel<T> extends CoreAutoCompleteInputModel<EventInfo> {
  @serializable() readonly type: string = FORM_CONTROL_TYPE_EVENTS_SEARCH_EVENT_INFOS_AUTOCOMPLETE_INPUT;

  // @serializable()
//  id: string;

  constructor(config: EventsSearchEventInfosAutoCompleteInputModelConfig, layout?: DynamicFormControlLayout) {
    super(config, layout);
  }
}
