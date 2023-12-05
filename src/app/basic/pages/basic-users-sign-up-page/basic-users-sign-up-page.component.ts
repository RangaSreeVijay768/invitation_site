import {Component, EventEmitter, Injector,Input, Output, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {PageComponent} from "@core/components/page.component";
import {Users} from "@core/core.models";
import UserAuthToken = Users.UserAuthToken;

import SwiperCore, { Swiper } from 'swiper';


@Component({
    selector: 'basic-users-sign-up-page',
    templateUrl: './basic-users-sign-up-page.component.html',
    styleUrls: ['./basic-users-sign-up-page.component.scss']
})
export class BasicUsersSignUpPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  @ViewChild('swiperContainer', { static: false }) swiperContainerRef: ElementRef;

  private swiper: Swiper;

  goToNextSlide() {
    console.log('h');
    this.swiper.slideNext();
  }

  ngAfterViewInit() {
    SwiperCore.use([]);
    this.swiper = new Swiper(this.swiperContainerRef.nativeElement, {
      // Add any additional Swiper configuration options here
    });
  }

    initializeComponent() {
    }



    setUserAuthTokenAndNavigate(response: UserAuthToken) {
        this.authService.setUserAuthToken(response);
        this.navigateToLoginPage();
    }

    navigateToLoginPage() {
        this.router.navigate(['/signedin'])
    }

}
