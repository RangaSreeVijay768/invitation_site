import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output, ViewChild} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import Swiper from 'swiper';
import {Blasts, Events} from '@core/core.models';
import Event = Events.Event;
import BlastListItems = Blasts.BlastListItems;
import BlastList = Blasts.BlastList;
import EventBlast = Blasts.EventBlast;
import {Observable} from "rxjs";
import EventInfo = Events.EventInfo;

@Component({
    selector: 'user-profiles-blasts-invite-to-event-swiper',
    templateUrl: './user-profiles-blasts-invite-to-event-swiper.component.html',
    styleUrls: ['./user-profiles-blasts-invite-to-event-swiper.component.scss']
})
export class UserProfilesBlastsInviteToEventSwiperComponent extends BaseComponent {

    event_blast_id: string;

    event_blast: EventBlast;

    blast_list_item: BlastListItems[] = [];

    @Output()
    eventBlastStarted = new EventEmitter<string>();

    current_time = CommonsService.getCurrentTimeAsDateTime();

    constructor(injector: Injector) {
        super(injector);
    }

    @Input()
    events: Event[];
  eventInfo$: Observable<EventInfo>;
  eventInfo: EventInfo;


    @ViewChild('swiper', {static: false})
    swiperEl: any;

    swiper: Swiper;

    selected_event: Event;

    @Input()
    blastList: BlastList;

    blastListItems: BlastListItems[] = [];

    print() {
        console.log('these', this.blastListItems);
    }


    initializeComponent() {
        const swiperEl = document.querySelector('swiper-container');
        this.swiperEl = swiperEl;
        this.swiperEl.initialize();
        this.swiper = this.swiperEl.swiper;
    }

    slideNext() {
        this.swiper.slideNext();
    }

    selectAllItems(blast_list_items: BlastListItems[]) {
        this.blast_list_item = this.blast_list_item.concat(blast_list_items);
    }

    selected_blast_list_items: BlastListItems[] = [];

    selected_all_contacts_from_blast_list = 'NO';

    handleBlastListItemCheckBoxEvent(event: any, request_item: BlastListItems) {
        if (event.target.checked) {
            this.addToSelectedContactsFromBlastList(request_item);
        } else {
            this.removeUserContactFromBlastList(request_item);
        }
    }

    handleSelectAllContactsFromBlastList(event: any) {
        console.log('in selecting blast list');
        if (event.target.checked) {
            this.selectAllContactsFromBlastList(this.blastListItems);
        } else {
            this.selected_blast_list_items = [];
        }
    }

    selectAllContactsFromBlastList(request_items: BlastListItems[]) {
        this.selected_blast_list_items = this.selected_blast_list_items.concat(request_items);
        console.log(this.selected_blast_list_items);
    }

    addToSelectedContactsFromBlastList(request_item: BlastListItems) {
        this.selected_blast_list_items = this.selected_blast_list_items.concat(request_item);
        console.log(this.selected_blast_list_items);
    }

    removeUserContactFromBlastList(request_item: BlastListItems) {
        const index_of = this.selected_blast_list_items.findIndex(
            item => request_item.display_name === item.display_name);
        if (index_of !== -1) {
            this.selected_blast_list_items = this.selected_blast_list_items.slice(0, index_of)
                .concat(this.selected_blast_list_items.slice(index_of + 1));
        }
        console.log(this.selected_blast_list_items);
    }

    getBlastListItemIds(blast_list_items: BlastListItems[]):string[] {
        blast_list_items = CommonsService.convertToArray(blast_list_items);
        return blast_list_items.map(blast_list_item => blast_list_item.blast_list_item_id);
    }
}
