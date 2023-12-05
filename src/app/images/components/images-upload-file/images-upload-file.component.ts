import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {ImagesAttachImageNoTemplateComponent} from '../images-attach-image/images-attach-image.component';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {Images} from '@core/core.models';
import {FilesService} from '@images/files.service';
import {ImageCroppedEvent} from 'ngx-image-cropper';
import UploadedFile = Images.UploadedFile;

@Component({
    selector: 'images-upload-file',
    templateUrl: './images-upload-file.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileComponent extends BaseComponent {

    uploader: FileUploader;

    @Input()
    entityType: string;
    @Input()
    entityId: string;

    @Input()
    type: string;

    @Input()
    autoUploadFile: boolean = true;
    @Input()
    autoAttachFile: boolean;

    @Output()
    imageAttached = new EventEmitter<string>();

    @Output()
    fileUploaded = new EventEmitter<UploadedFile>();

    // tslint:disable-next-line:variable-name
    image_file_upload_subscription$: Subscription;

    @ViewChild(ImagesAttachImageNoTemplateComponent, {static: true})
        // tslint:disable-next-line:variable-name
    images_attach_image_no_template_component: ImagesAttachImageNoTemplateComponent;

    image_upload_in_progress: boolean;

    current_time_stamp = CommonsService.getCurrentTimeAsDateTime().toSeconds();
    uploaded_file: UploadedFile;

    constructor(protected filesService: FilesService, injector: Injector) {
        super(injector);
        // tslint:disable-next-line:variable-name
        const _ImagesUploadFileComponent = this;
        this.image_upload_in_progress = true;
        this.authService.getAuthToken()
            .then(function (success) {
                _ImagesUploadFileComponent.uploader =
                    _ImagesUploadFileComponent.filesService.getFileUploader(success,
                        _ImagesUploadFileComponent.autoUploadFile);
                _ImagesUploadFileComponent.image_file_upload_subscription$ =
                    _ImagesUploadFileComponent.uploader.response
                        .subscribe(res => {
                            const jsonObject = JSON.parse(res);
                            if (jsonObject.status == null) {
                                _ImagesUploadFileComponent.fileUploaded.emit(
                                    CommonsService.deserialize(jsonObject, UploadedFile));
                            } else {
                                // error functionality
                            }
                            _ImagesUploadFileComponent.image_upload_in_progress = false;
                        });
            });
    }

    initializeComponent() {
        this.image_file_upload_subscription$ = this.fileUploaded.subscribe(value => {
            this.uploaded_file = value;
            console.log(this.uploaded_file);
            if (this.autoAttachFile) {
                this.images_attach_image_no_template_component.attachImage(
                    this.images_attach_image_no_template_component.createRequestData(value.uploaded_file_id));
            }
        });
    }

    attachImage(uploaded_file_id?: string, entity_id?: string, entity_type?: string) {
        this.images_attach_image_no_template_component.attachImage(
            this.images_attach_image_no_template_component.createRequestData(uploaded_file_id, entity_id, entity_type));
    }

    uploadCroppedImage(cropped_image: any): void {
        console.log("this is cropped image", cropped_image);
        if (!this.uploader || !this.uploader.queue || !this.uploader.queue.length) return;

        const idx = this.uploader.queue.length - 1;
        const fileItem: any = this.uploader.queue[idx];

        let file_name = fileItem.file.name;

        const file: File | null = this.dataBlobtoFile(cropped_image, file_name);
        if (!file) return;
        const newFileItem = new FileItem(this.uploader, file, this.uploader.options);
        newFileItem.withCredentials = false;
        this.uploader.queue[idx] = newFileItem;
        this.uploader.uploadAll();
    }

    dataBlobtoFile(blob, file_name): File {
        return new File([blob], file_name);
    }
}


@Component({
    selector: 'images-upload-file-create-event',
    templateUrl: './images-upload-file-create-event.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileCreateEventComponent extends ImagesUploadFileComponent {
    imgChangeEvt: any = '';
    cropImgPreview: any = '';

    onFileChange(event: any): void {
        this.imgChangeEvt = event;
    }

    cropImg(e: ImageCroppedEvent) {
    }

    imgLoad() {
        // display cropper tool
    }

    initCropper() {
        // init cropper
    }

    imgFailed() {
        // error msg
    }
}

@Component({
    selector: 'images-upload-file-create-blast-list',
    templateUrl: './images-upload-file-create-blast-list.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileCreateBlastListComponent extends ImagesUploadFileComponent {
}


@Component({
    selector: 'images-upload-file-update-event',
    templateUrl: './images-upload-file-update-event.component.html',
    styleUrls: ['./images-upload-file.component.scss']
})
export class ImagesUploadFileUpdateEventComponent extends ImagesUploadFileComponent {
}
