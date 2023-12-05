import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {CoreUpdateContentMetaComponent} from '@core/components/core-update-content-meta/core-update-content-meta.component';

@Component({
    selector: 'basic-set-meta-data',
    templateUrl: './basic-set-meta-data.component.html',
    styleUrls: ['./basic-set-meta-data.component.scss']
})
export class BasicSetMetaDataComponent extends CoreUpdateContentMetaComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        // console.log(this.eventInfo);
        // if (this.eventInfo) {
        //     this.title = this.eventInfo.event.event_title;
        //     this.description = this.eventInfo.event.event_description;
        //     this.image = this.eventInfo.image?.uploaded_file.file_link;
        // }
        this.image =
            'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_3.png';
        this.imageWidth = 1200;
        this.imageHeight = 900;
        this.title = 'Event Reply';
        this.description = 'Welcome to Event Reply. Your one stop event management place.';
        this.image = '';
        super.initializeComponent();
        window['prerenderReady'] = true;
    }

}

@Component({
    selector: 'basic-set-meta-data-no-template',
    templateUrl: './basic-set-meta-data-no-template.component.html',
    styleUrls: ['./basic-set-meta-data.component.scss']
})
export class BasicSetMetaDataNoTemplateComponent extends BasicSetMetaDataComponent {
}
