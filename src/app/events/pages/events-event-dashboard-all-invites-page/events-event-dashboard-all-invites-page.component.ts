import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import EventInvite = Events.EventInvite;
import EventInfo = Events.EventInfo;

@Component({
  selector: 'events-event-dashboard-all-invites-page',
  templateUrl: './events-event-dashboard-all-invites-page.component.html',
  styleUrls: ['./events-event-dashboard-all-invites-page.component.scss']
})
export class EventsEventDashboardAllInvitesPageComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  event_invites: EventInvite[];

  eventInfo$: Observable<EventInfo>;
  event_info: EventInfo;

  initializeComponent() {
    this.eventInfo$ = this.getRouterParameterFromParentObservable('eventInfo', 2);
    this.eventInfo$.subscribe(value => {
      this.event_info = value;
    });
  }

  currentFilter = 'Ticket types';
  SortFilters = ['Most Recent', 'Ticket types', 'Alphabetical order'];

  changeSortFilter(selected) {
    this.currentFilter = selected;
  }

}
