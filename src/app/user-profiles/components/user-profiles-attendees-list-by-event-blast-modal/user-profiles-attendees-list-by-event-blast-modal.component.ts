import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BaseModalComponent} from '@core/components/modals/base-modal.component';
import {
  UserProfilesAttendeesListByEventBlastModalContentComponent
} from '@user-profiles/components/user-profiles-attendees-list-by-event-blast-modal/user-profiles-attendees-list-by-event-blast-modal-content/user-profiles-attendees-list-by-event-blast-modal-content.component';
import {Blasts} from '@core/core.models';
import EventBlast = Blasts.EventBlast;

@Component({
  selector: 'user-profiles-attendees-list-by-event-blast-modal',
  templateUrl: './user-profiles-attendees-list-by-event-blast-modal.component.html',
  styleUrls: ['./user-profiles-attendees-list-by-event-blast-modal.component.scss']
})
export class UserProfilesAttendeesListByEventBlastModalComponent extends BaseModalComponent {


  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  eventBlast: EventBlast;

  openModal(params?) {
    super.open(UserProfilesAttendeesListByEventBlastModalContentComponent, {
      windowClass: 'user-profiles-attendees-list-by-event-blast-modal',
      scrollable: true
    });
    this.setModalData('eventBlast', this.eventBlast);
  }

  closeModal() {
  }

  performAction() {
  }

  initializeComponent() {
  }

}
