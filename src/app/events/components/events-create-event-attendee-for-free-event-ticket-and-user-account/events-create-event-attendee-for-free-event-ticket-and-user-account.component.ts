import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {EventsRequests} from "@events/events.models";
import {EventsService} from "@events/events.service";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Events} from "@core/core.models";
import CreateEventAttendeeForFreeEventTicketAndUserAccount = EventsRequests.CreateEventAttendeeForFreeEventTicketAndUserAccount;
import EventAttendee = Events.EventAttendee;
import EventTicket = Events.EventTicket;

// import EventInfo = Events.EventInfo;

@Component({
    selector: 'events-create-event-attendee-for-free-event-ticket-and-user-account',
    templateUrl: './events-create-event-attendee-for-free-event-ticket-and-user-account.component.html',
    styleUrls: ['./events-create-event-attendee-for-free-event-ticket-and-user-account.component.scss']
})
export class EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent extends SortedPaginatedBaseComponent {

    constructor(protected eventsService: EventsService, injector: Injector) {
        super(injector);
    }

    @Input()
    eventTicket: EventTicket;

    event_attendees: EventAttendee[];

    @Output()
    eventAttendeesReceived = new EventEmitter<EventAttendee[]>();

    initializeComponent() {
    }


    createRequestData(event_ticket_id?: string): CreateEventAttendeeForFreeEventTicketAndUserAccount.Request {
        const request = new CreateEventAttendeeForFreeEventTicketAndUserAccount.Request();
        request.event_ticket = event_ticket_id || this.eventTicket.event_ticket_id;
        return request;
    }

    create_event_attendee_for_free_event_ticket_and_user_account_subscription$: Subscription;

    createEventAttendeeForFreeEventTicketAndUserAccount(request: CreateEventAttendeeForFreeEventTicketAndUserAccount.Request) {
        this.create_event_attendee_for_free_event_ticket_and_user_account_subscription$ =
            this.eventsService.createEventAttendeeForFreeEventTicketAndUserAccount(request)
                .pipe(CommonsService.deserializeMap(CreateEventAttendeeForFreeEventTicketAndUserAccount.Response))
                .subscribe(value => {
                    this.event_attendees = value;
                    this.eventAttendeesReceived.emit(value);
                });
    }

}

@Component({
    selector: 'events-create-event-attendee-for-free-event-ticket-and-user-account-no-template',
    templateUrl: './events-create-event-attendee-for-free-event-ticket-and-user-account-no-template.component.html',
    styleUrls: ['./events-create-event-attendee-for-free-event-ticket-and-user-account.component.scss']
})
export class EventsCreateEventAttendeeForFreeEventTicketAndUserAccountNoTemplateComponent
    extends EventsCreateEventAttendeeForFreeEventTicketAndUserAccountComponent {
}
