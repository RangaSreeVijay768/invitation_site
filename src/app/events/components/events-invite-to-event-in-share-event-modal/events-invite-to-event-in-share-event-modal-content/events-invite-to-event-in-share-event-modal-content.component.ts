import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import Event = Events.Event;
@Component({
  selector: 'events-invite-to-event-in-share-event-modal-content',
  templateUrl: './events-invite-to-event-in-share-event-modal-content.component.html',
  styleUrls: ['./events-invite-to-event-in-share-event-modal-content.component.scss']
})
export class EventsInviteToEventInShareEventModalContentComponent extends BaseModalContentComponent {

  constructor(activeModal: NgbActiveModal, injector: Injector) {
    super(activeModal, injector);
  }

  @Input()
  event: Event;

  initializeComponent() {
    console.log('eve ', this.event);
  }

}

