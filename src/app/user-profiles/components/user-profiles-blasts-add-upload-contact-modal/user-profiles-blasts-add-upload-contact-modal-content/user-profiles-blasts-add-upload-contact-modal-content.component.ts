import {Component, Injector, Input} from '@angular/core';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Blasts} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
  selector: 'user-profiles-blasts-add-upload-contact-modal-content',
  templateUrl: './user-profiles-blasts-add-upload-contact-modal-content.component.html',
  styleUrls: ['./user-profiles-blasts-add-upload-contact-modal-content.component.scss']
})
export class UserProfilesBlastsAddUploadContactModalContentComponent extends BaseModalContentComponent {

  @Input()
  blast_list: BlastList;

  constructor(activeModal: NgbActiveModal, injector: Injector) {
    super(activeModal, injector);
  }

  initializeComponent() {

  }


}

