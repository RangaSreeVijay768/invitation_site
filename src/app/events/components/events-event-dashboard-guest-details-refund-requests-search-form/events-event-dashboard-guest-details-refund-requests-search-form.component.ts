import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
  EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_LAYOUT,
  EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_MODEL
} from "@events/events.form.models";

@Component({
    selector: 'events-event-dashboard-guest-details-refund-requests-search-form',
    templateUrl: './events-event-dashboard-guest-details-refund-requests-search-form.component.html',
    styleUrls: ['./events-event-dashboard-guest-details-refund-requests-search-form.component.scss']
})
export class EventsEventDashboardGuestDetailsRefundRequestsSearchFormComponent extends FormComponent {

    constructor(injector: Injector) {
        super(injector);
    }
    formLayout = EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_LAYOUT;
    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_EVENT_DASHBOARD_GUEST_DETAILS_REFUND_REQUESTS_SEARCH_FORM_MODEL();
    }
}
