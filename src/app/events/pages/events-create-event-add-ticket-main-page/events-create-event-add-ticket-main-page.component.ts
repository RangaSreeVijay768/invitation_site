import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {EventsConstants} from "@events/events.constants";

@Component({
    selector: 'events-create-event-add-ticket-main-page',
    templateUrl: './events-create-event-add-ticket-main-page.component.html',
    styleUrls: ['./events-create-event-add-ticket-main-page.component.scss']
})
export class EventsCreateEventAddTicketMainPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  selected_option = ' ';
  options = EventsConstants.ADD_TICKET_OPTIONS;

  initializeComponent() {
    }


}
