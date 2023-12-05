import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {FormComponent} from '@core/components/form.component';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import CreateEventInvitesByEventAndUserAccounts = EventsRequests.CreateEventInvitesByEventAndUserAccounts;
import {Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import Event = Events.Event;
import {EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_LAYOUT, EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_MODEL} from '@events/events.form.models';

@Component({
  selector: 'events-create-event-invite-by-event-and-user-account-form',
  templateUrl: './events-create-event-invite-by-event-and-user-account-form.component.html',
  styleUrls: ['./events-create-event-invite-by-event-and-user-account-form.component.scss']
})
export class EventsCreateEventInviteByEventAndUserAccountFormComponent extends FormComponent {

  constructor(protected eventsService: EventsService, injector: Injector) {
    super(injector);
  }

  @Input()
  userAccountIdList: UserAccount[] = [];

  user_accounts = [];

  @Input()
  event: Event;

  @Output()
  eventInvitesCreated = new EventEmitter<boolean>();

  @Input()
  userAccountList: UserAccount[] = [];

  formLayout = EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_LAYOUT;

  initializeComponent() {
    console.log('ul list', this.userAccountList);
  }

  createRequestData(): CreateEventInvitesByEventAndUserAccounts.Request {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.userAccountIdList.length; i++) {
      this.user_accounts.push(this.userAccountIdList[i].user_account_id);
      console.log(this.user_accounts);
    }
    const request = new CreateEventInvitesByEventAndUserAccounts.Request();
    request.event_id = this.event.event_id;
    request.user_accounts = this.user_accounts;
    request.message = this.getInputModelValueAsString('message');
    return request;
  }

  create_event_invites_by_event_and_user_accounts_subscription$: Subscription;

  createEventInvitesByEventAndUserAccounts = (request: CreateEventInvitesByEventAndUserAccounts.Request) => {
    this.create_event_invites_by_event_and_user_accounts_subscription$ = this.eventsService.createEventInvitesByEventAndUserAccounts(request)
      .subscribe(value => {
        this.eventInvitesCreated.emit(true);
      });
  };

  afterInitializeComponent() {
    this.getInputModel('message').value =
      'Hey, As we have decided to hold a party on Christmas, it would not be possible without you. You are cordially invited to my party and make the party convivial.';
  }

  getFormModel(): DynamicFormControlModel[] {
    return EVENT_MESSAGE_INVITE_PAST_ATTENDEES_FORM_MODEL();
  }
}
