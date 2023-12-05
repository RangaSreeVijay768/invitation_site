import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInvite = Events.EventInvite;
import {CommonsService} from "@core/commons.service";

@Component({
    selector: 'events-my-invited-events-upcoming-events',
    templateUrl: './events-my-invited-events-upcoming-events.component.html',
    styleUrls: ['./events-my-invited-events-upcoming-events.component.scss']
})
export class EventsMyInvitedEventsUpcomingEventsComponent extends PageComponent {

    current_time=CommonsService.getCurrentTimeAsDateTime();

    constructor(injector: Injector) {
        super(injector);
    }

    // events: Event[];

    // eventsReceived: EventInfo[];
    eventInvites: EventInvite[];

    initializeComponent() {
    }

    navigateToEventDetailsPage(event_id?: string) {
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

}
