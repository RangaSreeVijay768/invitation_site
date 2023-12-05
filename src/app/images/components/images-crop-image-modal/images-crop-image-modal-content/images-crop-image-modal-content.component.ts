import {Component, Injector} from "@angular/core";
import {BaseModalContentComponent} from "@core/components/modals/base-modal-content.component";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {OutputFormat} from "ngx-image-cropper";

@Component({
    selector: 'images-crop-image-modal-content',
    templateUrl: './images-crop-image-modal-content.component.html',
    styleUrls: ['./images-crop-image-modal-content.component.scss']
})
export class ImagesCropImageModalContentComponent extends BaseModalContentComponent {

    file_change_event: Event;

    image_file: any;
    cropped_image: any;
    aspect_ratio: number;
    format: OutputFormat;

    constructor(activeModal: NgbActiveModal, injector: Injector) {
        super(activeModal, injector);
    }

    initializeComponent() {

    }

    cropImage($event) {
        console.log("cropped", $event);
        this.cropped_image = $event.blob;
    }
}

