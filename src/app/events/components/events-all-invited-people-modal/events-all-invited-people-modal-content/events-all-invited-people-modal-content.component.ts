import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {BaseModalContentComponent} from '@core/components/modals/base-modal-content.component';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Events} from '@core/core.models';
import EventInvite = Events.EventInvite;
// import EventInfo = Events.EventInfo;
import Event = Events.Event;
import EventAttendee = Events.EventAttendee;
import {
  EVENTS_SEARCH_EVENT_INFOS_FORM_LAYOUT,
  EVENTS_SEARCH_EVENT_INFOS_FORM_MODEL, EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_LAYOUT,
  EVENTS_SEARCH_EVENT_MEMBER_INFOS_FORM_MODEL
} from '@events/events.form.models';
import {DynamicFormControlModel} from '@ng-dynamic-forms/core';


@Component({
  selector: 'events-all-invited-people-modal-content',
  templateUrl: './events-all-invited-people-modal-content.component.html',
  styleUrls: ['./events-all-invited-people-modal-content.component.scss']
})
export class EventsAllInvitedPeopleModalContentComponent extends BaseModalContentComponent {

  event: Event;

  event_attendees: EventAttendee[];

  @Input()
  eventInvite: EventInvite[];

  invited_by = true;


  eventInvites: EventInvite[];

  constructor(activeModal: NgbActiveModal, injector: Injector) {
    super(activeModal, injector);
  }

  isClicked() {
    if (this.invited_by === true) {
      this.invited_by = false;
    } else {
      this.invited_by = true;
    }
  }




  initializeComponent() {
  }


}

