import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-create-event-add-ticket-promocodes-page',
    templateUrl: './events-create-event-add-ticket-promocodes-page.component.html',
    styleUrls: ['./events-create-event-add-ticket-promocodes-page.component.scss']
})
export class EventsCreateEventAddTicketPromocodesPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
