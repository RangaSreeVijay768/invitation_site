import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import {Users} from '@core/core.models';
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
  selector: 'events-create-multiple-user-contacts-csv',
  templateUrl: './events-create-multiple-user-contacts-csv.component.html',
  styleUrls: ['./events-create-multiple-user-contacts-csv.component.scss']
})
export class EventsCreateMultipleUserContactsCsvComponent extends BaseComponent {

  @Input()
  hasHeaders: boolean;

  create_multiple_user_contact_request_items: CreateMultipleUserContactRequestItem[];

  @Output()
  createMultipleUserContactRequestItemsReceived = new EventEmitter<CreateMultipleUserContactRequestItem[]>();

  @ViewChild('fileImportInput') fileImportInput: any;


  constructor(protected ngxCsvParser: NgxCsvParser, injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  onFileUploaded(event: any) {
    const files = event.srcElement.files;

    this.ngxCsvParser.parse(files[0], {header: this.hasHeaders, delimiter: ',', encoding: 'utf8'})
      .pipe().subscribe({
      next: (result): void => {
        console.log('Result', result);
        if (result instanceof NgxCSVParserError) {

        } else {
          const items = (result || []).map(item => {
            const request_item = new CreateMultipleUserContactRequestItem();
            request_item.display_name = item.display_name;
            request_item.email = item.email;
            request_item.contact_type = item.contact_type;
            request_item.phone_number = item.phone_number;
            request_item.whatsapp_number = item.whatsapp_number;

            return request_item;
          });
          this.create_multiple_user_contact_request_items = items;
          console.log('items ', items);
          this.createMultipleUserContactRequestItemsReceived.emit(this.create_multiple_user_contact_request_items);
        }
      },
      error: (error: NgxCSVParserError): void => {
        console.log('Error', error);
      }
    });
  }

}
