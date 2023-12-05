import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {
  USER_PROFILES_PAYOUT_INFO_FORM_LAYOUT,
  USER_PROFILES_PAYOUT_INFO_FORM_MODEL
} from "@app/user-profiles/user-profiles.form.models";

@Component({
    selector: 'user-profiles-payout-information',
    templateUrl: './user-profiles-payout-information.component.html',
    styleUrls: ['./user-profiles-payout-information.component.scss']
})
export class UserProfilesPayoutInformationComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }


    initializeComponent() {
    }


}
