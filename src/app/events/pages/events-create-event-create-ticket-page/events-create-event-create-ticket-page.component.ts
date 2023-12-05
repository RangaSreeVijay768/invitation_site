import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from "@core/components/page.component";
import {Events} from '@core/core.models';

@Component({
    selector: 'events-create-event-create-ticket-page',
    templateUrl: './events-create-event-create-ticket-page.component.html',
    styleUrls: ['./events-create-event-create-ticket-page.component.scss']
})
export class EventsCreateEventCreateTicketPageComponent extends PageComponent {

    constructor(injector: Injector) {
        super(injector);
    }

  event$: Observable<Events.Event>;
  event: Events.Event;

    initializeComponent() {
      this.event$ = this.getRouterParameterFromParentObservable('event',  0);
      this.event$.subscribe(value => {
        this.event = value;
        console.log(this.event);
      });
    }

}
