import {BaseComponent} from "@core/components/base.component";
import {Component, EventEmitter, Injector, Output, ViewChild} from "@angular/core";
import {NgxCsvParser, NgxCSVParserError} from "ngx-csv-parser";

@Component({
    selector: 'events-read-user-contacts-csv',
    templateUrl: './events-read-user-contacts-csv.component.html',
    styleUrls: ['./events-read-user-contacts-csv.component.scss']
})
export class EventsReadUserContactsCsvComponent extends BaseComponent {

    @ViewChild('fileReadInput') fileImportInput: any;

    @Output()
    fileUploaded = new EventEmitter<File>();
    @Output()
    headersArrayReceived = new EventEmitter<string[]>();
    @Output()
    csvRecordsReceived = new EventEmitter<string[][]>();

    constructor(protected ngxCsvParser: NgxCsvParser, injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    onFileUploaded(event: any) {
        const files = event.srcElement.files;
        if (this.ngxCsvParser.isCSVFile(files[0])) {
            this.fileUploaded.emit(files[0]);
            console.log(files[0]);
            this.ngxCsvParser.parse(files[0], {delimiter: ',', header: false, encoding: "utf8"}).subscribe(value => {
                if (value instanceof NgxCSVParserError) {

                } else {
                    this.csvRecordsReceived.emit(value);
                }
            })
        }

    }

}
