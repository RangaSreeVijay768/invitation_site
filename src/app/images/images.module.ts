import {NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {
    ImagesGetImageByEntityAndTypeUniqueImageComponent, ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
    ImagesGetImageByEntityIdAndImageTypeComponent, ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent
} from './components/images-get-image-by-entity-id-and-image-type/images-get-image-by-entity-id-and-image-type.component';
import {AvatarModule} from 'ngx-avatars';
import {
    ImagesUploadFileComponent, ImagesUploadFileCreateBlastListComponent, ImagesUploadFileCreateEventComponent,
    ImagesUploadFileUpdateEventComponent
} from './components/images-upload-file/images-upload-file.component';
import {FileUploadModule} from "ng2-file-upload";
import {
    ImagesAttachImageNoTemplateComponent
} from "@images/components/images-attach-image/images-attach-image.component";
import {ImageCropperModule} from 'ngx-image-cropper';
import {
    ImagesCropImageModalComponent, ImagesCropImageModalNoTemplateComponent
} from "@images/components/images-crop-image-modal/images-crop-image-modal.component";
import {
    ImagesCropImageModalContentComponent
} from "@images/components/images-crop-image-modal/images-crop-image-modal-content/images-crop-image-modal-content.component";
import {ImagesImageCropperComponent} from "@images/components/images-image-cropper/images-image-cropper.component";

@NgModule({
    declarations: [


        ImagesGetImageByEntityIdAndImageTypeComponent,
        ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
        ImagesGetImageByEntityAndTypeUniqueImageComponent,
        ImagesUploadFileComponent,
        ImagesAttachImageNoTemplateComponent,
        ImagesUploadFileCreateEventComponent,
        ImagesUploadFileCreateBlastListComponent,
        ImagesUploadFileUpdateEventComponent,
        ImagesCropImageModalComponent,
        ImagesCropImageModalNoTemplateComponent,
        ImagesCropImageModalContentComponent,
        ImagesImageCropperComponent

    ],
    imports: [
        CoreModule,
        AvatarModule,
        FileUploadModule,
        ImageCropperModule
    ],
    exports: [
        ImagesGetImageByEntityIdAndImageTypeComponent,
        ImagesGetImageByEntityIdAndImageTypeNoTemplateComponent,
        ImagesGetImageByEntityAndTypeUniqueImageNgxAvatarComponent,
        ImagesUploadFileComponent,
        ImagesUploadFileCreateEventComponent,
        ImagesUploadFileCreateBlastListComponent,
        ImagesGetImageByEntityAndTypeUniqueImageComponent,
        ImagesUploadFileUpdateEventComponent,
        ImagesImageCropperComponent
    ],
    // entryComponents:[
    //
    // ]
})

export class ImagesModule {
}
