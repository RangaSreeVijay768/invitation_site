import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import Swiper from 'swiper';
import {Blasts, Events, Users} from '@core/core.models';
import {EventsConstants} from '@events/events.constants';
import BlastList = Blasts.BlastList;
import BlastListItems = Blasts.BlastListItems;
import Event = Events.Event;
import UserContact = Users.UserContact;

@Component({
  selector: 'events-invite-to-event-in-share-event-swiper',
  templateUrl: './events-invite-to-event-in-share-event-swiper.component.html',
  styleUrls: ['./events-invite-to-event-in-share-event-swiper.component.scss']
})
export class EventsInviteToEventInShareEventSwiperComponent extends BaseComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  @Output()
  openContactCreationModal = new EventEmitter<boolean>()

  options = EventsConstants.MASS_MESSAGING_OPTIONS;

  selected_option: string;

  user_contacts: Users.UserContact[];

  selected_user_contacts: Users.UserContact[] = [];

  filter_type: string;

  @Input()
  event: Event;

  selected_blast_list_item: BlastListItems[] = [];

  contact_list: UserContact[] = [];

  blastList: BlastList;

  blastListItems: BlastListItems[] = [];

  user_contact_ids: string[] = [];

  event_blast_id: string;

  blast_list_selected: BlastList;

  print() {
    console.log('these from swiper', this.blast_list_selected);
  }

  @Output()
  eventBlastStarted = new EventEmitter<string>();

  @Output()
  closeModalSelected = new EventEmitter<boolean>();
  @Output()
  uploadFromCsvClicked = new EventEmitter<boolean>();

  blast_list: BlastList[];

  selected_blast_list_border: BlastList;

  @ViewChild('swiper')
  swiperEl: any;

  swiper: Swiper;


  initializeComponent() {
    const swiperEl = document.querySelector('swiper-container');
    this.swiperEl = swiperEl;
    // @ts-ignore
    this.swiperEl.initialize();
    setTimeout(() => {
      this.swiper = this.swiperEl.nativeElement.swiper;
      this.swiper.slideTo(0, 10)
    }, 10);
    this.selected_option = 'USER_CONTACTS';
  }

  slideNext() {
    this.swiper.slideNext();
  }
  slidePrev() {
    this.swiper.slidePrev();
  }

  slideTo(index: number) {
    this.swiper.slideTo(index);
  }

  // selectAllItems(blast_list_items: BlastListItems[]) {
  //   this.blast_list_item = this.blast_list_item.concat(blast_list_items);
  // }

  switchToGroups() {
    this.selected_option = 'All groups';
    console.log('groups');
  }

  switchToContacts() {
    this.selected_option = 'All contacts';
    console.log('contacts');
  }

  handleRequestItemCheckBoxEvent(event: any, request_item: UserContact) {
    if (event.target.checked) {
      this.addToSelectedContacts(request_item);
    } else {
      this.removeUserContact(request_item);
    }
  }

  operation = 'NO';

  handleSelectAllContacts() {
    if (this.operation === 'NO') {
      this.selectAllContacts(this.user_contacts);
      this.operation = 'ADD';
    } else {
      this.selected_user_contacts = [];
      this.operation = 'NO';
    }
  }

  selectAllContacts(request_items: UserContact[]) {
    this.selected_user_contacts = this.selected_user_contacts.concat(request_items);
    console.log(this.selected_user_contacts);
  }

  addToSelectedContacts(request_item: UserContact) {
    this.selected_user_contacts = this.selected_user_contacts.concat(request_item);
    console.log(this.selected_user_contacts);
  }

  removeUserContact(request_item: UserContact) {
    const index_of = this.selected_user_contacts.findIndex(item => request_item.display_name === item.display_name);
    if (index_of !== -1) {
      this.selected_user_contacts =
        this.selected_user_contacts.slice(0, index_of).concat(this.selected_user_contacts.slice(index_of + 1));
    }
    console.log(this.selected_user_contacts);
  }

  selected_all_contacts_from_blast_list = 'NO';

  handleBlastListItemCheckBoxEvent(event: any, request_item: BlastListItems) {
    if (event.target.checked) {
      this.addToSelectedContactsFromBlastList(request_item);
    } else {
      this.removeUserContactFromBlastList(request_item);
    }
  }

  handleSelectAllContactsFromBlastList() {
    console.log('in selecting blast list');
    if (this.selected_all_contacts_from_blast_list === 'NO') {
      console.log('present is NO');
      this.selectAllContactsFromBlastList(this.blastListItems);
      this.selected_all_contacts_from_blast_list = 'ADD';
    } else {
      this.selected_blast_list_item = [];
      this.selected_all_contacts_from_blast_list = 'NO';
    }
  }

  selectAllContactsFromBlastList(request_items: BlastListItems[]) {
    this.selected_blast_list_item = this.selected_blast_list_item.concat(request_items);
    console.log(this.selected_blast_list_item);
  }

  addToSelectedContactsFromBlastList(request_item: BlastListItems) {
    this.selected_blast_list_item = this.selected_blast_list_item.concat(request_item);
    console.log(this.selected_blast_list_item);
  }

  removeUserContactFromBlastList(request_item: BlastListItems) {
    const index_of = this.selected_blast_list_item.findIndex(
      item => request_item.display_name === item.display_name);
    if (index_of !== -1) {
      this.selected_blast_list_item = this.selected_blast_list_item.slice(0, index_of)
        .concat(this.selected_blast_list_item.slice(index_of + 1));
    }
    console.log(this.selected_blast_list_item);
  }

}
