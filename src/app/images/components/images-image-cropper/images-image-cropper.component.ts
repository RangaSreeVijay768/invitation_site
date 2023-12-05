import {Component} from '@angular/core';
import {ImageCroppedEvent, LoadedImage} from "ngx-image-cropper";
import {BaseComponent} from "@core/components/base.component";

@Component({
    selector: 'images-image-cropper',
    templateUrl: './images-image-cropper.component.html',
    styleUrls: ['./images-image-cropper.component.scss']
})
export class ImagesImageCropperComponent extends BaseComponent {

    imageChangedEvent: any = '';
    croppedImage: any = '';

    initializeComponent() {
    }


    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }

    imageLoaded(image: LoadedImage) {
        // show cropper
    }

    cropperReady() {
        // cropper ready
    }

    loadImageFailed() {
        // show message
    }

}
