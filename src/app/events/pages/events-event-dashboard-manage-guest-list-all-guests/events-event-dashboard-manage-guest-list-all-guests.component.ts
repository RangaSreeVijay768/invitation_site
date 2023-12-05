import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInfo = Events.EventInfo;
import EventAttendee = Events.EventAttendee;

@Component({
  selector: 'events-event-dashboard-manage-guest-list-all-guests',
  templateUrl: './events-event-dashboard-manage-guest-list-all-guests.component.html',
  styleUrls: ['./events-event-dashboard-manage-guest-list-all-guests.component.scss']
})
export class EventsEventDashboardManageGuestListAllGuestsComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  eventInfo$: Observable<EventInfo>;
  event_info: EventInfo;

  event_attendees: EventAttendee[];

  currentFilter = 'Ticket types';
  SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];

  changeSortFilter(selected) {
    this.currentFilter = selected;
  }

  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
    this.eventInfo$.subscribe(value => {
      this.event_info = value;
    });
  }


}
