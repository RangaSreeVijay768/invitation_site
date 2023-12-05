import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetEventAttendeesCountByUserAccount = EventsRequests.GetEventAttendeesCountByUserAccount;
import {EventsService} from '@events/events.service';
import {Events} from '@core/core.models';
// import EventInfo = Events.EventInfo;
import Event = Events.Event;

@Component({
  selector: 'events-get-event-attendees-count-by-user-account',
  templateUrl: './events-get-event-attendees-count-by-user-account.component.html',
  styleUrls: ['./events-get-event-attendees-count-by-user-account.component.scss']
})
export class EventsGetEventAttendeesCountByUserAccountComponent extends BaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  events: Event[];

  @Output()
  eventsAttended = new EventEmitter<Event[]>();

  initializeComponent() {
  }

  createRequestData(): GetEventAttendeesCountByUserAccount.Request {
    const request = new GetEventAttendeesCountByUserAccount.Request();
    return request;
  }


  get_events_attendees_count_by_user_account_subscription$: Subscription;

  getEventAttendeesCountByUserAccount(request: GetEventAttendeesCountByUserAccount.Request) {
    this.get_events_attendees_count_by_user_account_subscription$ = this.eventsService.getEventAttendeesCountByUserAccount(request)
      .pipe(CommonsService.deserializeMap(GetEventAttendeesCountByUserAccount.Response))
      .subscribe(value => {
        console.log(value);
        this.events = value;
        this.eventsAttended.emit(value);
      });
  }

}

@Component({
  selector: 'events-get-event-attendees-count-by-user-account-no-template',
  templateUrl: './events-get-event-attendees-count-by-user-account-no-template.component.html',
  styleUrls: ['./events-get-event-attendees-count-by-user-account.component.scss']
})
export class EventsGetEventAttendeesCountByUserAccountNoTemplateComponent extends EventsGetEventAttendeesCountByUserAccountComponent {
}
