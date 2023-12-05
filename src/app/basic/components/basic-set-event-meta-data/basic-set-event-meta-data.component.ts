import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import {CoreUpdateContentMetaComponent} from '@core/components/core-update-content-meta/core-update-content-meta.component';

@Component({
    selector: 'basic-set-event-meta-data',
    templateUrl: './basic-set-event-meta-data.component.html',
    styleUrls: ['./basic-set-event-meta-data.component.scss']
})
export class BasicSetEventMetaDataComponent extends CoreUpdateContentMetaComponent {

    @Input()
    eventInfo: EventInfo;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        console.log(this.eventInfo);
        if (this.eventInfo) {
            this.title = this.eventInfo.event.event_title;
            this.description = this.eventInfo.event.event_description;
            this.image = this.eventInfo.image?.uploaded_file.file_link;
            // this.image='https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_630,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/image_zoom_widget/image_zoom_widget_img_1.png'
            this.imageWidth = 1200;
            this.imageHeight = 900;
        }
        super.initializeComponent();
        console.log('executing prerender ready');
        window['prerenderReady'] = true;
    }

}

@Component({
    selector: 'basic-set-event-meta-data-no-template',
    templateUrl: './basic-set-event-meta-data-no-template.component.html',
    styleUrls: ['./basic-set-event-meta-data.component.scss']
})
export class BasicSetEventMetaDataNoTemplateComponent extends BasicSetEventMetaDataComponent {
}
