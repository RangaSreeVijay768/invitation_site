import {Component, Injector, ViewChild} from '@angular/core';
import {PageComponent} from '@core/components/page.component';
import Swiper from 'swiper';
import {StripeService} from "ngx-stripe";

@Component({
    selector: 'basic-landing-page',
    templateUrl: './basic-landing-page.component.html',
    styleUrls: ['./basic-landing-page.component.scss'],

})

export class BasicLandingPageComponent extends PageComponent {

    @ViewChild('swiper')
    swiperEl: any;

    swiper: Swiper;

    swiper_params = {
        slidesPerView: 3,
        pagination: {
            el: '#div-campaigns-pagination'
        }
    };

    initializeComponent() {
        const swiperEl = document.querySelector('swiper-container');
        // console.log(swiperEl, this.swiperParams);
        // Object.assign(swiperEl, this.swiperParams);
        this.swiperEl = swiperEl;
        // @ts-ignore
        this.swiperEl.initialize();
        setTimeout(() => {
            this.swiper = this.swiperEl.nativeElement.swiper;
            console.log(this.swiper);
        }, 1000);
    }

    constructor(injector: Injector, protected stripeService: StripeService,) {
        super(injector);
    }

    // initializeComponent() {
    // }


    redirectToStripe() {
        this.stripeService.redirectToCheckout(
            {sessionId: 'cs_test_a1BqdNSJgKK2vYNu2ZpIYhUr8wKHZBEgAzYDnXIyPJpK5cT8RJk5qwOrZx',}).subscribe(value => {
            console.log(value);
        });
    }

}
