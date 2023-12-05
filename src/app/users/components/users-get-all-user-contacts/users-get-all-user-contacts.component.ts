import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'users-get-all-user-contacts',
    templateUrl: './users-get-all-user-contacts.component.html',
    styleUrls: ['./users-get-all-user-contacts.component.scss']
})
export class UsersGetAllUserContactsComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

}

@Component({
    selector: 'users-get-all-user-contacts-no-template',
    templateUrl: './users-get-all-user-contacts-no-template.component.html',
    styleUrls: ['./users-get-all-user-contacts.component.scss']
})
export class UsersGetAllUserContactsNoTemplateComponent extends UsersGetAllUserContactsComponent
{
}
