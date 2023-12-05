import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import Swiper from 'swiper';
import {CsvUserContactFieldMapping} from '@events/events.models';
import {Users} from '@core/core.models';
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
  selector: 'events-upload-user-contacts-from-csv-swiper',
  templateUrl: './events-upload-user-contacts-from-csv-swiper.component.html',
  styleUrls: ['./events-upload-user-contacts-from-csv-swiper.component.scss']
})
export class EventsUploadUserContactsFromCsvSwiperComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  contactCreationType: string;

  @Output()
  closeClicked = new EventEmitter<boolean>();

  @ViewChild('swiper')
  swiperEl: any;

  swiper: Swiper;

  csv_file: File;
  headers: string[];
  csv_records: string[][];

  csv_user_contact_field_mapping: CsvUserContactFieldMapping;

  create_multiple_user_contact_request_items: CreateMultipleUserContactRequestItem[];

  @Input()
  userContactRequestItems: CreateMultipleUserContactRequestItem[];

  @Output()
  userContactsCreated = new EventEmitter<boolean>();

  initializeComponent() {
    const swiperEl = document.querySelector('swiper-container');
    this.swiperEl = swiperEl;
    // @ts-ignore
    this.swiperEl.initialize();
    setTimeout(() => {
      this.swiper = this.swiperEl.nativeElement.swiper;
      this.swiper.on();
    }, 10);

  }

  slideNext() {
    console.log(this);
    this.swiper.slideNext();
  }

  setCSVRecordsAndHeaders(records: string[][]) {
    this.csv_records = records;
    this.headers = records[0];
  }

  setCsvUserContactFieldMapping(csv_user_contact_field_mapping: CsvUserContactFieldMapping) {
    console.log('set csv user contact field mapping');
    this.csv_user_contact_field_mapping = csv_user_contact_field_mapping;
    console.log('csv user contacts ', csv_user_contact_field_mapping);
  }

  createCreateMultipleUserContactRequestItems(csv_records: string[][],
                                              csv_user_contact_field_mapping: CsvUserContactFieldMapping): CreateMultipleUserContactRequestItem[] {
    const array = [];
    const field_mapping = {};
    csv_records[0].map((value, index) => {
      field_mapping[value] = index;
    });
    const create_multiple_user_contact_request_items = [];
    for (let i = 1; i < csv_records.length; i++) {
      const request_item = new CreateMultipleUserContactRequestItem();
      // request_item.display_name = csv_records[i][field_mapping[csv_user_contact_field_mapping.name]];
      // request_item.email = csv_records[i][field_mapping[csv_user_contact_field_mapping.email_id]];
      // if (csv_user_contact_field_mapping.phone_number){
      //   request_item.phone_number = csv_records[i][field_mapping[csv_user_contact_field_mapping.phone_number]];
      // }
      // if (csv_user_contact_field_mapping.whats_app_number){
      //   request_item.whatsapp_number =
      //     csv_records[i][field_mapping[csv_user_contact_field_mapping.whats_app_number]];
      // }

      if (this.contactCreationType === 'EMAIL') {
        request_item.display_name = csv_records[i][field_mapping[csv_user_contact_field_mapping.name]];
        request_item.email = csv_records[i][field_mapping[csv_user_contact_field_mapping.email_id]];
      }

      if (this.contactCreationType === 'PHONE_NUMBER') {
        request_item.display_name = csv_records[i][field_mapping[csv_user_contact_field_mapping.name]];
        request_item.phone_number = csv_records[i][field_mapping[csv_user_contact_field_mapping.phone_number]];
      }

      if (this.contactCreationType === 'WHATSAPP_NUMBER') {
        request_item.display_name = csv_records[i][field_mapping[csv_user_contact_field_mapping.name]];
        request_item.whatsapp_number = csv_records[i][field_mapping[csv_user_contact_field_mapping.whats_app_number]];
      }
      create_multiple_user_contact_request_items.push(request_item);

    }
    //TODO: this is temporary
    this.create_multiple_user_contact_request_items = create_multiple_user_contact_request_items;
    console.log(create_multiple_user_contact_request_items, this.create_multiple_user_contact_request_items);

    return create_multiple_user_contact_request_items;
  }


  selected_user_contact_request_items: CreateMultipleUserContactRequestItem[] = [];


  handleRequestItemCheckBoxEvent(event: any, request_item: CreateMultipleUserContactRequestItem) {
    if (event.target.checked) {
      this.addToSelectedContacts(request_item);
    } else {
      this.removeUserContactRequestItem(request_item);
    }
  }

  handlSelectAllContacts(event) {
    if (event.target.checked) {
      this.selectAllContacts(this.userContactRequestItems);
    } else {
      this.selected_user_contact_request_items = [];
    }
  }

  selectAllContacts(request_items: CreateMultipleUserContactRequestItem[]) {
    this.selected_user_contact_request_items = this.selected_user_contact_request_items.concat(request_items);
    console.log(this.selected_user_contact_request_items);
  }

  addToSelectedContacts(request_item: CreateMultipleUserContactRequestItem) {
    this.selected_user_contact_request_items = this.selected_user_contact_request_items.concat(request_item);
    console.log(this.selected_user_contact_request_items);
  }

  removeUserContactRequestItem(request_item: CreateMultipleUserContactRequestItem) {
    const index_of = this.selected_user_contact_request_items.findIndex(item => request_item.display_name === item.display_name);
    if (index_of !== -1) {
      this.selected_user_contact_request_items = this.selected_user_contact_request_items.slice(0, index_of).concat(this.selected_user_contact_request_items.slice(index_of + 1));
    }
    console.log(this.selected_user_contact_request_items);
  }

}
