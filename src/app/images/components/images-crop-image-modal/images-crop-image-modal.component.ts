import {Component, Injector, Input} from "@angular/core";
import {BaseModalComponent} from "@core/components/modals/base-modal.component";
import {OutputFormat} from "ngx-image-cropper";
import {
    ImagesCropImageModalContentComponent
} from "@images/components/images-crop-image-modal/images-crop-image-modal-content/images-crop-image-modal-content.component";

@Component({
    selector: 'images-crop-image-modal',
    templateUrl: './images-crop-image-modal.component.html',
    styleUrls: ['./images-crop-image-modal.component.scss']
})
export class ImagesCropImageModalComponent extends BaseModalComponent {

    @Input()
    fileChangeEvent: Event;
    @Input()
    imageFile: any;
    @Input()
    aspectRatio: number;
    @Input()
    format: OutputFormat;


    constructor(injector: Injector) {
        super(injector);
    }

    async openModal(event?: Event, image_file?: any) {
        await super.open(ImagesCropImageModalContentComponent);
        this.setModalData('file_change_event', event || this.fileChangeEvent);
        this.setModalData('image_file', image_file || this.imageFile);
        this.setModalData('aspect_ratio', this.aspectRatio);
        this.setModalData('format', this.format);
    }

    closeModal() {
    }

    performAction() {
    }

    initializeComponent() {
    }

}


@Component({
    selector: 'images-crop-image-modal-no-template',
    templateUrl: './images-crop-image-modal-no-template.component.html',
    styleUrls: ['./images-crop-image-modal.component.scss']
})
export class ImagesCropImageModalNoTemplateComponent extends ImagesCropImageModalComponent {
}
