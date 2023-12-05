import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-premium-plans-page',
    templateUrl: './events-premium-plans-page.component.html',
    styleUrls: ['./events-premium-plans-page.component.scss']
})
export class EventsPremiumPlansPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
