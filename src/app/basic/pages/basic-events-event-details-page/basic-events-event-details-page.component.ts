import {Component, Injector} from "@angular/core";
import {Observable} from "rxjs";
import {Events} from "@core/core.models";
import {BasicPageComponent} from "@basic/pages/basic-page.component";
import EventInfo = Events.EventInfo;
import Event = Events.Event;
import EventInvite = Events.EventInvite;

@Component({
    selector: 'basic-events-event-details-page',
    templateUrl: './basic-events-event-details-page.component.html',
    styleUrls: ['./basic-events-event-details-page.component.scss']
})
export class BasicEventsEventDetailsPageComponent extends BasicPageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    eventInfo$: Observable<EventInfo>;
    event_info: EventInfo;

    event: Event;

    event_invites: EventInvite[];

    initializeComponent() {
        this.eventInfo$ = this.getRouterParameterObservable('eventInfo');
        this.eventInfo$.subscribe(value => {
            this.event_info = value;
            this.event = this.event_info.event;
        });
    }

    getLoggedInRouterUrl(): string {
        console.log(this.activatedRoute);
        return `/signedin/events/${this.activatedRoute.snapshot.params['eventId']}`;
    }


}
