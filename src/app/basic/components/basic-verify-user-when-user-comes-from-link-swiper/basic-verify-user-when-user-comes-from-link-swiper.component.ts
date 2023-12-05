import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import Swiper from 'swiper';
import {Events, Users} from '@core/core.models';
import EventTicket = Events.EventTicket;
import MessageDelivery = Users.MessageDelivery;
import UserEventTicket = Events.UserEventTicket;
import EventAttendee = Events.EventAttendee;
import EventTicketInfo = Events.EventTicketInfo;
import OrderCompleteInfo = Events.OrderCompleteInfo;
import {StripeService} from "ngx-stripe";
import UserAuthToken = Users.UserAuthToken;

@Component({
  selector: 'basic-verify-user-when-user-comes-from-link-swiper',
  templateUrl: './basic-verify-user-when-user-comes-from-link-swiper.component.html',
  styleUrls: ['./basic-verify-user-when-user-comes-from-link-swiper.component.scss']
})
export class BasicVerifyUserWhenUserComesFromLinkSwiperComponent extends BaseComponent {

  verified: boolean;

  @ViewChild('swiper')
  swiperEl: any;

  swiper: Swiper;

  @Output()
  userEventTicketCreated = new EventEmitter<UserEventTicket>;

  @Output()
  eventAttendeeReceived = new EventEmitter<EventAttendee[]>;

  user_auth_token:UserAuthToken;

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

    console.log('iiiiiiiiiiiiiiiii', this.messageDelivery);
  }

  constructor(protected stripeService: StripeService, injector: Injector) {
    super(injector);
  }

  event_tickets: EventTicket[];

  @Input()
  event: Events.Event;

  selected_event_ticket: EventTicketInfo;

  event_ticket_infos: EventTicketInfo[];

  amount = 0;

  // tslint:disable-next-line:variable-name
  no_of_tickets = 0;

  messageDelivery: MessageDelivery;

  increaseTickets() {
    this.no_of_tickets++;
    this.amount = this.amount + 5;
    console.log('ST =', this.no_of_tickets);
  }

  decreaseTickets() {
    if (this.no_of_tickets > 0) {
      this.no_of_tickets--;
      this.amount = this.amount - 5;
    }
    console.log('decrease');
  }

  slideNext() {
    this.swiper.slideNext();
  }

  redirectToCheckout(order_complete_info: OrderCompleteInfo) {
    this.stripeService.redirectToCheckout({sessionId: order_complete_info.order_payment.payment_gateway_id})
        .subscribe(value => {
          console.log(value);
        });
  }
}

