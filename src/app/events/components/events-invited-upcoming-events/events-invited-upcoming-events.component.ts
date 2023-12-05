import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'events-invited-upcoming-events',
    templateUrl: './events-invited-upcoming-events.component.html',
    styleUrls: ['./events-invited-upcoming-events.component.scss']
})
export class EventsInvitedUpcomingEventsComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
