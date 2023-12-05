import {Component} from '@angular/core';
import {
  CoreAutoCompleteFormControlComponent
} from '@core/components/forms/core-auto-complete-form-control/core-auto-complete-form-control.component';
import {DynamicFormLayoutService, DynamicFormValidationService} from '@ng-dynamic-forms/core';
import {CommonsService} from '@core/commons.service';
import {Events} from '@core/core.models';
import {SearchRequests} from '@app/search/search.models';
import {SearchService} from '@app/search/search.service';
import EventInfo = Events.EventInfo;
import SearchEventInfos = SearchRequests.SearchEventInfos;

@Component({
  selector: 'events-search-event-infos-auto-complete-form-control',
  templateUrl: './events-search-event-infos-auto-complete-form-control.component.html',
  styleUrls: ['./events-search-event-infos-auto-complete-form-control.component.scss']
})
export class EventsSearchEventInfosAutoCompleteFormControlComponent
  extends CoreAutoCompleteFormControlComponent<EventInfo> {

  constructor(protected searchService: SearchService, layoutService: DynamicFormLayoutService,
              validationService: DynamicFormValidationService) {
    super(layoutService, validationService);
  }

  placeholder: 'Search events';

  keyword = 'event.event_name';

  is_loading = false;

  onChangeSearch(val: string) {
    console.log(val, 'searchgin');
    const request = new SearchEventInfos.Request();
    request.query = val;
    console.log(request.query);
    this.is_loading = true;
    this.searchService.searchEventInfos(request).pipe(CommonsService.deserializeMap(EventInfo))
      .subscribe(value => {
        this.is_loading = false;
        console.log(value);
        this.data = (value || []).map(object => this.app_flatten_object_pipe.transform(object));
        console.log(this.data);
      });
  }

  public selectedValueRender = (text: any): string => {
    console.log(text);
    return text;
  };

  customFilter = (items: any[]) => items;
}
