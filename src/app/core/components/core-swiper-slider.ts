// import {BaseComponent} from '@core/components/base.component';
// import {Directive, EventEmitter, Input, Output, ViewChild} from '@angular/core';
// import {SwiperComponent} from '@node-modules/swiper/angular';
// import {DEFAULT_SLIDE_OPTIONS} from '@core/core.constants';
// import Swiper from '@node-modules/swiper';
//
// @Directive()
// export abstract class CoreSwiperSlider extends BaseComponent {
//   @ViewChild(SwiperComponent, {static: true})
//   swiper_component: SwiperComponent;
//
//   @Input()
//   slidesPerView = 1;
//   @Input()
//   spaceBetween: number;
//
//   @Output()
//   slidesInitialized = new EventEmitter<[swiper: Swiper]>();
//   @Output()
//   slideIndexChanged = new EventEmitter<[swiper: Swiper]>();
//
//   totalSlides: number;
//   currentSlide = 0;
//
//   initializeComponent() {
//
//     this.swiper_component.s_afterInit.subscribe(async value => {
//       this.slidesInitialized.emit(value);
//     });
//
//     this.swiper_component.s_slidesLengthChange.subscribe(async value => {
//       this.totalSlides = value[0].slides.length;
//     });
//     this.swiper_component.s_slideChangeTransitionEnd.subscribe(async value => {
//       this.currentSlide = value[0].activeIndex;
//       this.slideIndexChanged.emit(value);
//       window.scrollTo({top: 0});
//     });
//   }
//
//   slideNext() {
//     this.swiper_component.swiperRef.slideNext(DEFAULT_SLIDE_OPTIONS.SPEED);
//   }
//
//   slidePrevious() {
//     this.swiper_component.swiperRef.slidePrev(DEFAULT_SLIDE_OPTIONS.SPEED);
//   }
//
//   slideTo(index: number) {
//     this.swiper_component.swiperRef.slideTo(index, DEFAULT_SLIDE_OPTIONS.SPEED);
//   }
//
//   setTotalSlides() {
//     this.totalSlides = this.swiper_component.swiperRef.slides.length;
//   }
//
//
// }
