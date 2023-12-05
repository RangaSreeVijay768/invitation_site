import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';

@Component({
    selector: 'events-my-created-events-upcoming-events-scrolling',
    templateUrl: './events-my-created-events-upcoming-events-scrolling.component.html',
    styleUrls: ['./events-my-created-events-upcoming-events-scrolling.component.scss']
})
export class EventsMyCreatedEventsUpcomingEventsScrollingComponent extends BaseInfiniteScrollComponent<any> {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
