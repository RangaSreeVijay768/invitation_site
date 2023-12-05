import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {BlastsRequests} from '@app/blasts/blasts.models';
import CreateEventBlastAndAddEventBlastRecipients = BlastsRequests.CreateEventBlastAndAddEventBlastRecipients;
import {BlastsService} from '@app/blasts/blasts.service';
import {Blasts} from '@core/core.models';
import EventBlast = Blasts.EventBlast;
import {Events} from '@core/core.models';
import BlastList = Blasts.BlastList;

@Component({
  selector: 'user-profiles-create-event-blast-and-add-event-blast-recipients',
  templateUrl: './user-profiles-create-event-blast-and-add-event-blast-recipients.component.html',
  styleUrls: ['./user-profiles-create-event-blast-and-add-event-blast-recipients.component.scss']
})
export class UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent extends BaseComponent {

  constructor(injector: Injector, protected blastService: BlastsService) {
    super(injector);
  }

  @Input()
  event: Events.Event;

  @Input()
  blastList: BlastList;

  @Output()
  evenBlastCreatedRecipientsAdded = new EventEmitter<EventBlast>();

  initializeComponent() {
  }

  createRequestData(): CreateEventBlastAndAddEventBlastRecipients.Request {
    const request = new CreateEventBlastAndAddEventBlastRecipients.Request();
    request.event = this.event.event_id;
    request.blast_list = this.blastList.blast_list_id;
    request.message = '';
    request.event_blast_message = '';
    return request;
  }

  create_event_blast_and_add_event_blast_recipients_subscription$: Subscription;

  createEventBlastAndAddEventBlastRecipients = (request: CreateEventBlastAndAddEventBlastRecipients.Request) => {
    this.create_event_blast_and_add_event_blast_recipients_subscription$ =
      this.blastService.createEventBlastAndAddEventBlastRecipients(request)
        .pipe(CommonsService.deserializeMap(CreateEventBlastAndAddEventBlastRecipients.Response))
        .subscribe(value => {
          this.evenBlastCreatedRecipientsAdded.emit(value);
        });
  };


}
