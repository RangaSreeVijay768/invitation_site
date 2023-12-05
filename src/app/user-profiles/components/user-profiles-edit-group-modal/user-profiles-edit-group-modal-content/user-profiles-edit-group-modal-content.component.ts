import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Blasts} from "@core/core.models";
import BlastList = Blasts.BlastList;
import BlastListItems = Blasts.BlastListItems;

@Component({
    selector: 'user-profiles-edit-group-modal-content',
    templateUrl: './user-profiles-edit-group-modal-content.component.html',
    styleUrls: ['./user-profiles-edit-group-modal-content.component.scss']
})
export class UserProfilesEditGroupModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {
    }

  blastList$: Observable<BlastList>;
  blastList: BlastList;
  blastListItems: BlastListItems[];


}

