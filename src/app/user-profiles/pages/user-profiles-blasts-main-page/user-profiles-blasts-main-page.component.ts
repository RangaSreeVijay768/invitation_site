import {Component, Injector} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;

@Component({
    selector: 'user-profiles-blasts-main-page',
    templateUrl: './user-profiles-blasts-main-page.component.html',
    styleUrls: ['./user-profiles-blasts-main-page.component.scss']
})
export class UserProfilesBlastsMainPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    type: string;

    userAccount: UserAccount;

    filter_blast_list_name:string;

    initializeComponent() {
        // this.type =;
    }


}
