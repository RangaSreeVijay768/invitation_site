import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-create-event-add-ticket-ticket-type-page',
    templateUrl: './events-create-event-add-ticket-ticket-type-page.component.html',
    styleUrls: ['./events-create-event-add-ticket-ticket-type-page.component.scss']
})
export class EventsCreateEventAddTicketTicketTypePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
