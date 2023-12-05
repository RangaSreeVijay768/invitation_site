import {Component, Injector, Input} from "@angular/core";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {
    UserProfilesBlastsAddUploadContactModalContentComponent
} from "@app/user-profiles/components/user-profiles-blasts-add-upload-contact-modal/user-profiles-blasts-add-upload-contact-modal-content/user-profiles-blasts-add-upload-contact-modal-content.component";
import {Blasts} from "@core/core.models";
import BlastList = Blasts.BlastList;

@Component({
    selector: 'user-profiles-blasts-add-upload-contact-modal',
    templateUrl: './user-profiles-blasts-add-upload-contact-modal.component.html',
    styleUrls: ['./user-profiles-blasts-add-upload-contact-modal.component.scss']
})
export class UserProfilesBlastsAddUploadContactModalComponent extends BaseModalComponent {


    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    blastList: BlastList;


    openModal(params?) {
        // tslint:disable-next-line:max-line-length
        super.open(UserProfilesBlastsAddUploadContactModalContentComponent,
            {windowClass: 'user-profiles-blasts-add-upload-contact-modal', scrollable: true, fullscreen: 'lg'});
        this.setModalData('blast_list', this.blastList);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}
