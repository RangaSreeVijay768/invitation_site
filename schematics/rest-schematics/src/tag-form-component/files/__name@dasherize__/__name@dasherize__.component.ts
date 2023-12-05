import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {FormComponent} from "@core/components/form.component";
import {DynamicFormControlEvent, DynamicFormControlModel} from "@ng-dynamic-forms/core";

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends FormComponent {

    @Output()
itemCreated=new EventEmitter<any>();
@Output()
    itemDeleted=new EventEmitter<any>();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    afterInitializeComponent() {
    }

    getFormModel(): DynamicFormControlModel[] {
        return [];
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
