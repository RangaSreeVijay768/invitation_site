import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent{
  title = 'upraise-admin';
  // @ViewChild('swiperRef')
  // swiperRef: ElementRef | undefined;
  // swiper?: Swiper;
  //
  // ngAfterViewInit(): void {
  //   register();
  //   this.swiper = this.swiperRef?.nativeElement.swiper;
  // }
  //
  // onActiveIndexChange() {
  //   console.log(this.swiper?.activeIndex);
  // }
}
