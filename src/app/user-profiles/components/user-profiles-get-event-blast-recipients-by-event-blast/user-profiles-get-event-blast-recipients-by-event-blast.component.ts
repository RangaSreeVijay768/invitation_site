import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {PaginatedBaseComponent, SortedPaginatedBaseComponent} from '@core/components/paginated-base.component';
import {BlastsRequests} from '@app/blasts/blasts.models';
import GetEventBlastRecipientsByEventBlast = BlastsRequests.GetEventBlastRecipientsByEventBlast;
import {BlastsService} from '@app/blasts/blasts.service';
import {Blasts} from '@core/core.models';
import EventBlastRecipient = Blasts.EventBlastRecipient;
import BlastList = Blasts.BlastList;
import EventBlast = Blasts.EventBlast;
import {BaseInfiniteScrollComponent} from '@core/components/base-infinite-scroll.component';

@Component({
  selector: 'user-profiles-get-event-blast-recipients-by-event-blast',
  templateUrl: './user-profiles-get-event-blast-recipients-by-event-blast.component.html',
  styleUrls: ['./user-profiles-get-event-blast-recipients-by-event-blast.component.scss']
})
export class UserProfilesGetEventBlastRecipientsByEventBlastComponent extends SortedPaginatedBaseComponent {

  constructor(injector: Injector, protected blastService: BlastsService) {
    super(injector);
  }

  @Input()
  eventBlast: EventBlast;

  @Output()
  eventBlastRecipientsRecieved = new EventEmitter<EventBlastRecipient[]>();

  initializeComponent() {
    this.getEventBlastByBlastList(this.createRequestData());
  }

  createRequestData(first?: number, count?: number, column_name?: string,
                    column_order?: string): GetEventBlastRecipientsByEventBlast.Request {
    let request = new GetEventBlastRecipientsByEventBlast.Request();
    request.event_blast = this.eventBlast.event_blast_id;
    // request = this.setLimits(request, first, count);
    // request = this.setColumnOrders(request, column_name, column_order);
    return request;
  }

  get_event_blast_recipients_by_event_blast_subscription$: Subscription;

  getEventBlastByBlastList(request: GetEventBlastRecipientsByEventBlast.Request) {
    this.get_event_blast_recipients_by_event_blast_subscription$ = this.blastService.getEventBlastRecipientsByEventBlast(request)
      .pipe(CommonsService.deserializeMap(GetEventBlastRecipientsByEventBlast.Response))
      .subscribe(value => {
        this.eventBlastRecipientsRecieved.emit(value);
      });
  }

}

@Component({
  selector: 'user-profiles-get-event-blast-recipients-by-event-blast-no-template',
  templateUrl: './user-profiles-get-event-blast-recipients-by-event-blast-no-template.component.html',
  styleUrls: ['./user-profiles-get-event-blast-recipients-by-event-blast.component.scss']
})
export class UserProfilesGetEventBlastRecipientsByEventBlastNoTemplateComponent extends UserProfilesGetEventBlastRecipientsByEventBlastComponent {
}

@Component({
  selector: 'user-profiles-get-event-blast-recipients-by-event-blast-scrolling',
  templateUrl: './user-profiles-get-event-blast-recipients-by-event-blast-scrolling.component.html',
  styleUrls: ['./user-profiles-get-event-blast-recipients-by-event-blast.component.scss']
})
export class UserProfilesGetEventBlastRecipientsByEventBlastScrollingComponent extends BaseInfiniteScrollComponent<UserProfilesGetEventBlastRecipientsByEventBlastComponent> {

  event_blas_recipients: EventBlastRecipient[];

  initializeComponent() {
  }

  performScrolling() {
    console.log('scrolling in blast recipients modal');
    this.scrollingComponent.getEventBlastByBlastList(
      this.scrollingComponent.createRequestData(this.currentCount, this.numberOfItems, undefined, undefined));
  }
}
