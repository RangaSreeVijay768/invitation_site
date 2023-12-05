import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import Event = Events.Event;
import {Events} from "@core/core.models";


@Component({
    selector: 'events-my-draft-events-page',
    templateUrl: './events-my-draft-events-page.component.html',
    styleUrls: ['./events-my-draft-events-page.component.scss']
})
export class EventsMyDraftEventsPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    events: Event[];

    initializeComponent() {
    }

    navigateToEventDetailsPage(event_id?:string){
        this.router.navigateByUrl(`/signedin/events/${event_id}`);
    }

}
