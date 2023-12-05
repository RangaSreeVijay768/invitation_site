import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlEvent, DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
    EVENTS_CREATE_EVENT_FREE_TICKET_FORM_LAYOUT,
    EVENTS_SEARCH_EVENT_INFOS_FORM_LAYOUT,
    EVENTS_SEARCH_EVENT_INFOS_FORM_MODEL
} from '@events/events.form.models';

@Component({
    selector: 'events-search-event-infos-form',
    templateUrl: './events-search-event-infos-form.component.html',
    styleUrls: ['./events-search-event-infos-form.component.scss']
})
export class EventsSearchEventInfosFormComponent extends FormComponent {

    @Output()
    itemCreated = new EventEmitter<any>();
    @Output()
    itemDeleted = new EventEmitter<any>();

    constructor(injector: Injector) {
        super(injector);
    }

    formLayout = EVENTS_SEARCH_EVENT_INFOS_FORM_LAYOUT;

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_SEARCH_EVENT_INFOS_FORM_MODEL();
    }

    emitCreatedOrRemovedEvent($event: DynamicFormControlEvent) {
        if ($event.type === 'add') {
            this.itemCreated.emit($event.$event);
        }
        if ($event.type === 'remove') {
            this.itemDeleted.emit($event.$event);
        }
    }
}
