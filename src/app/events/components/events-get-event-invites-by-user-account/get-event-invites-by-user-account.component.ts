import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {EventsRequests} from '@events/events.models';
import GetEventInvitesByUserAccount = EventsRequests.GetEventInvitesByUserAccount;
import {Events, Users} from '@core/core.models';
import EventInvite = Events.EventInvite;
import Event = Events.Event;
import {EventsService} from '@events/events.service';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import UserAccount = Users.UserAccount;
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import EventTicket = Events.EventTicket;

// import EventInfo = Events.EventInfo;

@Component({
  selector: 'get-event-invites-by-user-account',
  templateUrl: './get-event-invites-by-user-account.component.html',
  styleUrls: ['./get-event-invites-by-user-account.component.scss']
})
export class GetEventInvitesByUserAccountComponent extends SortedPaginatedBaseComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  eventTickets: EventTicket[];


  @Input()
  userAccount: UserAccount;

  eventInvites: EventInvite[];


  @Output()
  eventInvitesReceived = new EventEmitter<EventInvite[]>();

  initializeComponent() {
    this.getEventInvitesByUserAccount(this.createRequestData());
  }

  // createRequestData(user_account_id?: string): GetEventInvitesByUserAccount.Request {
  //     const request = new GetEventInvitesByUserAccount.Request();
  //     request.user_account = user_account_id || this.userAccount.user_account_id;
  //     return request;
  // }

  createRequestData(user_account_id?: string, first?: number, count?: number, column_name?: string,
                    column_order?: string): GetEventInvitesByUserAccount.Request {
    let request = new GetEventInvitesByUserAccount.Request();
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    request.user_account = user_account_id || this.userAccount.user_account_id;
    return request;
  }

  get_event_invites_by_user_account_subscription$: Subscription;

  getEventInvitesByUserAccount(request: GetEventInvitesByUserAccount.Request) {
    this.get_event_invites_by_user_account_subscription$ = this.eventsService.getEventInvitesByUserAccount(request)
      .pipe(CommonsService.deserializeMap(GetEventInvitesByUserAccount.Response))
      .subscribe(value => {
        this.eventInvites = value;
        this.eventInvitesReceived.emit(value);
      });
  }
}

@Component({
  selector: 'get-event-invites-by-user-account-no-template',
  templateUrl: './get-event-invites-by-user-account-no-template.component.html',
  styleUrls: ['./get-event-invites-by-user-account.component.scss']
})
export class GetEventInvitesByUserAccountNoTemplateComponent extends GetEventInvitesByUserAccountComponent {
}

@Component({
  selector: 'get-event-invites-by-user-account-scrolling',
  templateUrl: './get-event-invites-by-user-account-scrolling.component.html',
  styleUrls: ['./get-event-invites-by-user-account.component.scss']
})
export class GetEventInvitesByUserAccountScrollingComponent extends BaseInfiniteScrollComponent<GetEventInvitesByUserAccountComponent> {
  eventTickets: Events.EventTicket[];

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  performScrolling(): void {
    const scrolling_component = this.scrollingComponent;
    console.log('this is ', this.scrollingComponent);
    scrolling_component.getEventInvitesByUserAccount(
      scrolling_component.createRequestData(undefined, this.currentCount, this.numberOfItems)
    );
  }

  print(event) {
    console.log(event);
  }
}
