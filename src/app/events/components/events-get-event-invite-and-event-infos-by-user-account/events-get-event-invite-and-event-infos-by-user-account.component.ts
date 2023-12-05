import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetEventInviteAndEventInfosByUserAccount = EventsRequests.GetEventInviteAndEventInfosByUserAccount;
import {Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import EventInviteAndEventInfo = Events.EventInviteAndEventInfo;
import {EventsService} from '@events/events.service';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';

@Component({
  selector: 'events-get-event-invite-and-event-infos-by-user-account',
  templateUrl: './events-get-event-invite-and-event-infos-by-user-account.component.html',
  styleUrls: ['./events-get-event-invite-and-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndEventInfosByUserAccountComponent extends SortedPaginatedBaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  userAccount: UserAccount;

  event_invite_and_event_infos: EventInviteAndEventInfo[];

  @Output()
  eventInviteAndEventInfosReceived = new EventEmitter<EventInviteAndEventInfo[]>();

  initializeComponent() {
    this.getEventInviteAndEventInfosByUserAccount(this.createRequestData());
  }

  createRequestData(user_account_id?: string, first?: number, count?: number, column_name?: string, column_order?: string): GetEventInviteAndEventInfosByUserAccount.Request {
    let request = new GetEventInviteAndEventInfosByUserAccount.Request();
    request.user_account = user_account_id || this.userAccount.user_account_id;
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  get_event_invite_and_event_infos_by_user_account_subscription$: Subscription;

  getEventInviteAndEventInfosByUserAccount(request: GetEventInviteAndEventInfosByUserAccount.Request) {
    this.get_event_invite_and_event_infos_by_user_account_subscription$ = this.eventsService.getEventInviteAndEventInfosByUserAccount(request)
      .pipe(CommonsService.deserializeMap(GetEventInviteAndEventInfosByUserAccount.Response))
      .subscribe(value => {
        this.event_invite_and_event_infos = value;
        this.eventInviteAndEventInfosReceived.emit(value);
      });
  }



}

@Component({
  selector: 'events-get-event-invite-and-event-infos-by-user-account-no-template',
  templateUrl: './events-get-event-invite-and-event-infos-by-user-account-no-template.component.html',
  styleUrls: ['./events-get-event-invite-and-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent extends EventsGetEventInviteAndEventInfosByUserAccountComponent {
}

@Component({
  selector: 'events-get-event-invite-and-event-infos-by-user-account-scrolling',
  templateUrl: './events-get-event-invite-and-event-infos-by-user-account-scrolling.component.html',
  styleUrls: ['./events-get-event-invite-and-event-infos-by-user-account.component.scss']
})
export class EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent extends BaseInfiniteScrollComponent<EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent> {
  initializeComponent() {
  }

}
