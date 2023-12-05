import {Component, Input, ViewChild} from '@angular/core';

import {StripeCardComponent} from 'ngx-stripe';
import {Events} from '@core/core.models';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {ModalResult} from '@core/app.models';
import {combineLatest} from 'rxjs';
import EventTicket = Events.EventTicket;


@Component({
  selector: 'events-stripe-payment-form-modal-content',
  templateUrl: './events-stripe-payment-form-modal-content.component.html',
  styleUrls: ['./events-stripe-payment-form-modal-content.component.scss']
})
export class EventsStripePaymentFormModalContentComponent extends BaseModalContentComponent {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  @Input()
  eventTicket: EventTicket;

  @Input()
  order_payment_id: string;

  print() {
    console.log('received');
  }

  closeModal(modalResult?: ModalResult) {
    if (this.effectsObservableArray.length) {
      combineLatest(this.effectsObservableArray)
        .subscribe(values => {
          this.closeModalClicked.emit(modalResult);
        });
    } else {
      this.closeModalClicked.emit(modalResult);
    }
  }

  initializeComponent() {
    console.log('this is = ', this.order_payment_id);
  }
}



