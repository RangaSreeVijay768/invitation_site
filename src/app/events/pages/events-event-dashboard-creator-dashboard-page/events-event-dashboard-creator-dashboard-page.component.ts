import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Events} from "@core/core.models";
import EventInfo = Events.EventInfo;
import {truncate} from 'lodash';
import UserEventTicket = Events.UserEventTicket;

@Component({
    selector: 'events-event-dashboard-creator-dashboard-page',
    templateUrl: './events-event-dashboard-creator-dashboard-page.component.html',
    styleUrls: ['./events-event-dashboard-creator-dashboard-page.component.scss']
})
export class EventsEventDashboardCreatorDashboardPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    user_event_tickets: UserEventTicket[];

    sale_sum: unknown

    orderItemCount: unknown;
    userEventTicketCount: unknown;
  eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;


  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo',1);
    this.eventInfo$.subscribe(value => {
      this.eventInfo = value;
    });
  }

  navigateToTicketSales(){
    this.router.navigateByUrl(`/signedin/events/eventdashboard/${this.eventInfo.event.event_id}/ticketdetails/ticketsales`);
  }

  navigateToShareEventPage(){
    this.router.navigateByUrl(`/signedin/events/shareevent/${this.eventInfo.event.event_id}`);
  }

  protected readonly truncate = truncate;
}
