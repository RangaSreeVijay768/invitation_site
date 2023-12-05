import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from '@core/components/page.component';

@Component({
    selector: 'events-event-dashboard-guest-details-refund-requests-page',
    templateUrl: './events-event-dashboard-guest-details-refund-requests-page.component.html',
    styleUrls: ['./events-event-dashboard-guest-details-refund-requests-page.component.scss']
})
export class EventsEventDashboardGuestDetailsRefundRequestsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
