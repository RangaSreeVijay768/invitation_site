import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;

@Component({
    selector: 'basic-verify-user-when-user-comes-from-link-modal-content',
    templateUrl: './basic-verify-user-when-user-comes-from-link-modal-content.component.html',
    styleUrls: ['./basic-verify-user-when-user-comes-from-link-modal-content.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    @Input()
    event: Events.Event;

    initializeComponent() {
    }

  protected readonly window = window;
}

