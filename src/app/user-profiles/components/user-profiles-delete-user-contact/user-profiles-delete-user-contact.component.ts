import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {UsersRequests} from '@users/users.models';
import DeleteUserContact = UsersRequests.DeleteUserContact;
import {UsersService} from '@users/users.service';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import UserContact = Users.UserContact;

@Component({
    selector: 'user-profiles-delete-user-contact',
    templateUrl: './user-profiles-delete-user-contact.component.html',
    styleUrls: ['./user-profiles-delete-user-contact.component.scss']
})
export class UserProfilesDeleteUserContactComponent extends BaseComponent {

    constructor(protected usersService: UsersService, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    @Input()
    userContact: UserContact;

    @Output()
    userContactDeleted = new EventEmitter<boolean>();

    createRequestData(id?: string): DeleteUserContact.Request {
      const request = new DeleteUserContact.Request();
      request.userContactId = id || this.userContact.user_contact_id;
      return request;
    }

    delete_user_contact_subscription$: Subscription;

    deleteUserContact(request: DeleteUserContact.Request) {
      this.delete_user_contact_subscription$ = this.usersService.deleteUserContact(request)
        .subscribe(value => {
          this.userContactDeleted.emit(true);
        });
    }


}
