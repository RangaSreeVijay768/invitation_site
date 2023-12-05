import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import Swiper from 'swiper';
import {Users} from '@core/core.models';
import MessageDelivery = Users.MessageDelivery;

@Component({
  selector: 'users-user-sign-up-slider',
  templateUrl: './users-user-sign-up-slider.component.html',
  styleUrls: ['./users-user-sign-up-slider.component.scss']
})
export class UsersUserSignUpSliderComponent extends BaseComponent {

  // messageDelivery: MessageDelivery;

  //message_delivery=$event;slideNext();

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
    console.log('SLIDING');
    this.swiper.slideNext();
  }

  // createRequestData(): SignUp.Request {
  //   const request = new SignUp.Request();
  //   // request.email = this.getInputModelValueAsString('email');
  //   request.phone_number = this.getInputModelValueAsString('phone_number');
  //   // request.whats_app_number = this.getInputModelValueAsString('whats_app_number');
  //   request.password = this.getInputModelValueAsString('password');
  //   request.display_name = this.getInputModelValueAsString('display_name');
  //   return request;
  // }
  //
  // sign_up_subscription$: Subscription;
  //
  // signUp(request: SignUp.Request) {
  //   this.sign_up_subscription$ = this.usersService.signUp(request)
  //     .pipe(CommonsService.deserializeMap(SignUp.Response))
  //     .subscribe(value => {
  //       this.userAuthTokenReceived.emit(value);
  //     });
  // }
  //
  // setUserAuthTokenAndNavigate(response: UserAuthToken) {
  //   this.authService.setUserAuthToken(response);
  //   this.navigateToLoginPage();
  // }

  navigateTo() {
    this.router.navigateByUrl(`/signedin/events/homepage`);
  }

}
