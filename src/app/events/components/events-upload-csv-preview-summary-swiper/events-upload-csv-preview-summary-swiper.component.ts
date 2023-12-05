import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import Swiper from 'swiper';
import {Users} from '@core/core.models';
import UserContact = Users.UserContact;
import CreateMultipleUserContactRequestItem = Users.CreateMultipleUserContactRequestItem;

@Component({
  selector: 'events-upload-csv-preview-summary-swiper',
  templateUrl: './events-upload-csv-preview-summary-swiper.component.html',
  styleUrls: ['./events-upload-csv-preview-summary-swiper.component.scss']
})
export class EventsUploadCsvPreviewSummarySwiperComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  @Input()
  userContactRequestItems: CreateMultipleUserContactRequestItem[];

  @Output()
  closeClicked = new EventEmitter<boolean>();
  @Output()
  userContactsCreated=new EventEmitter<boolean>();

  @ViewChild('swiper')
  swiperEl: any;

  swiper: Swiper;

  selected_user_contact_request_items: CreateMultipleUserContactRequestItem[] = [];


  initializeComponent() {
    // const swiperEl = document.querySelector('swiper-container');
    // this.swiperEl = swiperEl;
    // // @ts-ignore
    // this.swiperEl.initialize();
    // setTimeout(() => {
    //   this.swiper = this.swiperEl.nativeElement.swiper;
    // }, 1000);

    console.log('cccccc ', this.userContactRequestItems);
  }

  slideNext() {
    console.log('sliding');
    this.swiper.slideNext();
  }

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

