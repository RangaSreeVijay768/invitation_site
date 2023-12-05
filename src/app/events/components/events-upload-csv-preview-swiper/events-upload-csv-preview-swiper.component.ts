import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import Swiper from 'swiper';

@Component({
    selector: 'events-upload-csv-preview-swiper',
    templateUrl: './events-upload-csv-preview-swiper.component.html',
    styleUrls: ['./events-upload-csv-preview-swiper.component.scss']
})
export class EventsUploadCsvPreviewSwiperComponent extends BaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    @ViewChild('swiper')
    swiperEl: any;

    swiper: Swiper;


    initializeComponent() {
        console.log(this.swiperEl);
        const swiperEl = document.querySelector('swiper-container');
        // console.log(swiperEl, this.swiperParams);
        // Object.assign(swiperEl, this.swiperParams);
        console.log(this.swiperEl, swiperEl);
        this.swiperEl = swiperEl;
        // @ts-ignore
        this.swiperEl.initialize();
        setTimeout(() => {
            this.swiper = this.swiperEl.nativeElement.swiper;
        }, 1000);
    }

    slideNext() {
        console.log('sliding');
        this.swiper.slideNext();
    }


}
