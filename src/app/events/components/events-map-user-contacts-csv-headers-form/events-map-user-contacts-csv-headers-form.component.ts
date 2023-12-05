import {Component, EventEmitter, Injector, Input, Output} from "@angular/core";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlModel} from "@ng-dynamic-forms/core";
import {
  EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_LAYOUT,
  EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_MODEL
} from '@events/events.form.models';
import {CsvUserContactFieldMapping} from "@events/events.models";

@Component({
    selector: 'events-map-user-contacts-csv-headers-form',
    templateUrl: './events-map-user-contacts-csv-headers-form.component.html',
    styleUrls: ['./events-map-user-contacts-csv-headers-form.component.scss']
})
export class EventsMapUserContactsCsvHeadersFormComponent extends FormComponent {

    @Input()
    headersArray: string[];

    @Input()
    contactCreationType: string;

    csv_user_contact_field_mapping: CsvUserContactFieldMapping;

    formLayout = EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_LAYOUT

    @Output()
    csvUserContactFieldMappingReceived = new EventEmitter<CsvUserContactFieldMapping>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return EVENTS_MAP_USER_CONTACTS_CSV_HEADERS_FORM_MODEL(this.headersArray);
    }

    createRequestData(): CsvUserContactFieldMapping {
        const request = new CsvUserContactFieldMapping();
        request.name = this.getInputModelValueAsString('name');
        request.email_id = this.getInputModelValueAsString('email_id');
        request.phone_number = this.getInputModelValueAsString('phone_number');
        request.whats_app_number = this.getInputModelValueAsString('whatsapp_number');

        return request;
    }

    getCsvUserContactFieldMapping(request: CsvUserContactFieldMapping) {
        console.log('get csv contact field mapping');
        this.csv_user_contact_field_mapping = request;
        this.csvUserContactFieldMappingReceived.emit(request);
    }
}
