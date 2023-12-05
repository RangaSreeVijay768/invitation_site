import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'user-profiles-purchase-history-page',
    templateUrl: './user-profiles-purchase-history-page.component.html',
    styleUrls: ['./user-profiles-purchase-history-page.component.scss']
})
export class UserProfilesPurchaseHistoryPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
