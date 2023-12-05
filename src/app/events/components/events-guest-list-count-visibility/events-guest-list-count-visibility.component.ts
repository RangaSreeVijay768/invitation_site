import {BaseComponent} from "@core/components/base.component";
import {Component, Injector, Input} from "@angular/core";
import {Events} from "@core/core.models";
import Event = Events.Event;

@Component({
    selector: 'events-guest-list-count-visibility',
    templateUrl: './events-guest-list-count-visibility.component.html',
    styleUrls: ['./events-guest-list-count-visibility.component.scss']
})
export class EventsGuestListCountVisibilityComponent extends BaseComponent {

    @Input()
    event: Event;

    status: string;

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.status = this.event.guest_list_count_visibility;
        console.log('count',this.status);
    }


}
