import {Component, EventEmitter, Injector, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {Core, Users} from '@core/core.models';
import {UsersService} from '@users/users.service';
import {UsersRequests} from '@users/users.models';
import UserContact = Users.UserContact;
import GetUserContactsByUserAccount = UsersRequests.GetUserContactsByUserAccount;
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';
import {EventsSearchEventInfosComponent} from '@events/components/events-search-event-infos/events-search-event-infos.component';

@Component({
  selector: 'user-profiles-get-user-contacts-by-user-account',
  templateUrl: './user-profiles-get-user-contacts-by-user-account.component.html',
  styleUrls: ['./user-profiles-get-user-contacts-by-user-account.component.scss']
})
export class UserProfilesGetUserContactsByUserAccountComponent extends SortedPaginatedBaseComponent {

  user_contacts: UserContact[];

  @Output()
  userContactsReceived = new EventEmitter<UserContact[]>();


  constructor(protected usersService: UsersService, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
    this.getUserContactsByUserAccount(this.createRequestData());
  }

  createRequestData(first?: number, count?: number, column_name?: string,
                    column_order?: string): GetUserContactsByUserAccount.Request {
    let request = new GetUserContactsByUserAccount.Request();
    request = this.setLimits(request, first, count);
    request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }


  get_user_contacts_by_user_account_subscription$: Subscription;

  getUserContactsByUserAccount(request: GetUserContactsByUserAccount.Request) {
    this.get_user_contacts_by_user_account_subscription$ = this.usersService.getUserContactsByUserAccount(request)
      .pipe(CommonsService.deserializeMap(GetUserContactsByUserAccount.Response))
      .subscribe(value => {
        this.user_contacts = value;
        this.userContactsReceived.emit(value);
      });
  }

}

@Component({
  selector: 'user-profiles-get-user-contacts-by-user-account-no-template',
  templateUrl: './user-profiles-get-user-contacts-by-user-account-no-template.component.html',
  styleUrls: ['./user-profiles-get-user-contacts-by-user-account.component.scss']
})
export class UserProfilesGetUserContactsByUserAccountNoTemplateComponent
  extends UserProfilesGetUserContactsByUserAccountComponent {
}

@Component({
  selector: 'user-profiles-get-all-user-contacts-by-user-account-scrolling',
  templateUrl: './user-profiles-get-user-contacts-by-user-account-scrolling.component.html',
  styleUrls: ['./user-profiles-get-user-contacts-by-user-account.component.scss']
})

export class UserProfilesGetUserContactsByUserAccountScrollingComponent extends BaseInfiniteScrollComponent<UserProfilesGetUserContactsByUserAccountComponent> {

  initializeComponent() {
  }

  performScrolling() {
    console.log('scrolling ...');
    this.scrollingComponent.getUserContactsByUserAccount(
      this.scrollingComponent.createRequestData(undefined, this.numberOfItems, undefined, undefined,
      ));
  }
}
