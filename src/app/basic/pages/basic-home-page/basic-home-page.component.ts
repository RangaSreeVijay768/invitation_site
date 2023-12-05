import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'basic-home-page',
    templateUrl: './basic-home-page.component.html',
    styleUrls: ['./basic-home-page.component.scss']
})
export class BasicHomePageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }


}
