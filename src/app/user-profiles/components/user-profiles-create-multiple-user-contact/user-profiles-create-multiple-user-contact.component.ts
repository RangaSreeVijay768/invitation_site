import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersService} from '@users/users.service';
import {UsersRequests} from '@users/users.models';
import CreateMultipleUserContact = UsersRequests.CreateMultipleUserContact;
import {Users} from '@core/core.models';
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
    selector: 'user-profiles-create-multiple-user-contact',
    templateUrl: './user-profiles-create-multiple-user-contact.component.html',
    styleUrls: ['./user-profiles-create-multiple-user-contact.component.scss']
})
export class UserProfilesCreateMultipleUserContactComponent extends BaseComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    @Input()
    items: CreateMultipleUserContactRequestItem[] = [];

    @Output()
    multipleContactsCreated = new EventEmitter<boolean>();

    initializeComponent() {
    }

    createRequestData(): CreateMultipleUserContact.Request {
      const request = new CreateMultipleUserContact.Request();
      request.items = this.items;
      return request;
    }

    create_multiple_user_contact_subscription$: Subscription;

    createMultipleUserContact(request: CreateMultipleUserContact.Request) {
      this.create_multiple_user_contact_subscription$ = this.usersService.createMultipleUserContact(request)
        .subscribe(value => {
          this.multipleContactsCreated.emit(true)
        });
    }

}
