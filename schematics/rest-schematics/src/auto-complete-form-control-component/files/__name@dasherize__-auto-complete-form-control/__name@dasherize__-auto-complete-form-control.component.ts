import {Component} from '@angular/core';
import {
    CoreAutoCompleteFormControlComponent
} from '@core/components/forms/core-auto-complete-form-control/core-auto-complete-form-control.component';
import {DynamicFormLayoutService, DynamicFormValidationService} from '@ng-dynamic-forms/core';
import {CommonsService} from '@core/commons.service';

@Component({
    selector: '<%= dasherize(name) %>-auto-complete-form-control',
    templateUrl: './<%= dasherize(name) %>-auto-complete-form-control.component.html',
    styleUrls: ['./<%= dasherize(name) %>-auto-complete-form-control.component.scss']
})
export class <%= classify(name) %>AutoCompleteFormControlComponent extends CoreAutoCompleteFormControlComponent<T> {

    constructor(layoutService: DynamicFormLayoutService,
                validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    onChangeSearch(val: string) {
        // this.plansService.searchPlanRoutines(request).pipe(CommonsService.deserializeMap(PlanRoutine))
        //     .subscribe(value => {
        //         this.data = value;
        //     });
    }

    public selectedValueRender = (text: any): string => {
        console.log(text);
        return text.plan_routine_name;
    };
}
