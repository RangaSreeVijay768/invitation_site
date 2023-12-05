import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetAllEventCategories = EventsRequests.GetAllEventCategories;
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';

@Component({
    selector: 'events-get-all-event-categories',
    templateUrl: './events-get-all-event-categories.component.html',
    styleUrls: ['./events-get-all-event-categories.component.scss']
})
export class EventsGetAllEventCategoriesComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    event_categories: [];

    event_infos: EventInfo[];

    @Output()
    eventInfosReceived = new EventEmitter<EventInfo[]>();


    initializeComponent() {
        this.getAllEventCategories(this.createRequestData());
    }

    createRequestData(first?: number, count?: number, column_name?: string, column_order?: string): GetAllEventCategories.Request {
        let request = new GetAllEventCategories.Request();

        request = this.setLimits(request, first, count);
        request = this.setColumnOrders(request, column_name, column_order);
        return request;
    }

    get_all_event_categories_subscription$: Subscription;

    getAllEventCategories(request: GetAllEventCategories.Request) {
        this.get_all_event_categories_subscription$ = this.eventsService.getAllEventCategories(request)
            .pipe(CommonsService.deserializeMap(GetAllEventCategories.Response))
            .subscribe(value => {
                this.event_categories = value;
                this.eventInfosReceived.emit(value);
            });
    }

}

@Component({
    selector: 'events-get-all-event-categories-no-template',
    templateUrl: './events-get-all-event-categories-no-template.component.html',
    styleUrls: ['./events-get-all-event-categories.component.scss']
})
export class EventsGetAllEventCategoriesNoTemplateComponent extends EventsGetAllEventCategoriesComponent {
}
