import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Blasts} from '@core/core.models';
import EventBlast = Blasts.EventBlast;
import EventBlastRecipient = Blasts.EventBlastRecipient;
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'user-profiles-attendees-list-by-event-blast-modal-content',
  templateUrl: './user-profiles-attendees-list-by-event-blast-modal-content.component.html',
  styleUrls: ['./user-profiles-attendees-list-by-event-blast-modal-content.component.scss']
})
export class UserProfilesAttendeesListByEventBlastModalContentComponent extends BaseModalContentComponent {

  constructor(activeModal: NgbActiveModal, injector: Injector) {
    super(activeModal, injector);
  }

  @Input()
  eventBlast: EventBlast;

  event_blast_recipients: EventBlastRecipient[];

  initializeComponent() {
    console.log('event blast ', this.eventBlast);
  }

  protected readonly $e = $e;
}

