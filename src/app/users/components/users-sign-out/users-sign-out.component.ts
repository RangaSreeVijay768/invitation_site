import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output} from "@angular/core";

@Component({
    selector: 'users-sign-out',
    templateUrl: './users-sign-out.component.html',
    styleUrls: ['./users-sign-out.component.scss']
})
export class UsersSignOutComponent extends BaseComponent {

    @Output()
    userLoggedOut = new EventEmitter<boolean>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    logOut() {
        this.authService.clearAll();
        this.userLoggedOut.emit(true);
    }
}

@Component({
    selector: 'users-sign-out-no-template',
    templateUrl: './users-sign-out-no-template.component.html',
    styleUrls: ['./users-sign-out.component.scss']
})
export class UsersSignOutNoTemplateComponent extends UsersSignOutComponent {
}
