import {Component, Injector} from "@angular/core";
import {PageComponent} from "@core/components/page.component";

@Component({
    selector: 'events-home-page',
    templateUrl: './events-home-page.component.html',
    styleUrls: ['./events-home-page.component.scss']
})
export class EventsHomePageComponent extends PageComponent {

    location_type: string;
    ticket_type: string;

    constructor(injector: Injector) {
        super(injector);
    }

    keyword = 'name';
    data = [
        {
            id: 1,
            name: 'Georgia'
        },
        {
            id: 2,
            name: 'Usa'
        },
        {
            id: 3,
            name: 'England'
        }
    ];

    initializeComponent() {
    }

    setEventFilters(location_type?: string, ticket_type?: string) {
        this.location_type = location_type;
        this.ticket_type = ticket_type;
    }


}
