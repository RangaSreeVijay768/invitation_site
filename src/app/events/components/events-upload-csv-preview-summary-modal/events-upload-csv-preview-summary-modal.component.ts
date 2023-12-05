import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
  EventsUploadCsvPreviewSummaryModalContentComponent
} from '@events/components/events-upload-csv-preview-summary-modal/events-upload-csv-preview-summary-modal-content/events-upload-csv-preview-summary-modal-content.component';
import {Users} from '@core/core.models';
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
  selector: 'events-upload-csv-preview-summary-modal',
  templateUrl: './events-upload-csv-preview-summary-modal.component.html',
  styleUrls: ['./events-upload-csv-preview-summary-modal.component.scss']
})
export class EventsUploadCsvPreviewSummaryModalComponent extends BaseModalComponent {


  constructor(injector: Injector) {
    super(injector);
  }


  openModal(items: CreateMultipleUserContactRequestItem[], params?) {
    console.log('mmm ', items);
    super.open(EventsUploadCsvPreviewSummaryModalContentComponent, {
      windowClass: 'events-upload-csv-preview-summary-modal',
      scrollable: true
    });
    this.setModalData('items', items);
  }

  closeModal() {
  }

  performAction() {
  }

  initializeComponent() {
  }

}
