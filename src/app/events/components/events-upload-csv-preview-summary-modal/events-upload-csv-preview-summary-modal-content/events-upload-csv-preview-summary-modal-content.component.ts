import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Users} from '@core/core.models';
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
    selector: 'events-upload-csv-preview-summary-modal-content',
    templateUrl: './events-upload-csv-preview-summary-modal-content.component.html',
    styleUrls: ['./events-upload-csv-preview-summary-modal-content.component.scss']
})
export class EventsUploadCsvPreviewSummaryModalContentComponent extends BaseModalContentComponent {

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    @Input()
    items: CreateMultipleUserContactRequestItem[];

    initializeComponent() {
      console.log('iiiiiii ', this.items);
    }

}

