import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
// import EventInfo = Events.EventInfo;
import Event = Events.Event;

@Component({
    selector: 'events-event-details-paid-page',
    templateUrl: './events-event-details-paid-page.component.html',
    styleUrls: ['./events-event-details-paid-page.component.scss']
})
export class EventsEventDetailsPaidPageComponent extends PageComponent {

  eventInfo$: Observable<Event>;
  // tslint:disable-next-line:variable-name
  event_info: Event;

  eventInvites: EventInvite[];
    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
