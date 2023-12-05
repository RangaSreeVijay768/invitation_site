import {Component, EventEmitter, Injector,Input, Output} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {DynamicFormLayoutService, DynamicFormValidationService} from "@ng-dynamic-forms/core";
import {CoreTagInputFormControlComponent} from "@core/components/forms/core-tag-input-form-control/core-tag-input-form-control.component";
import {TagModel} from "ngx-chips/core/accessor";
import {Observable} from "rxjs";
import {AppFlattenObjectPipe} from "@core/core.pipe";
import {<%= classify(name) %>TagModelInput} from './<%= dasherize(name) %>-tag-input.model';

@Component({
    selector: '<%= dasherize(name) %>-tag-input-form-control',
    templateUrl: './<%= dasherize(name) %>-tag-input-form-control.component.html',
    styleUrls: ['./<%= dasherize(name) %>-tag-input-form-control.component.scss']
})
export class <%= classify(name) %>TagInputFormControlComponent extends CoreTagInputFormControlComponent<T> {

    @Input() model: <%= classify(name) %>TagModelInput<T[]>;

    app_flatten_object_pipe = new AppFlattenObjectPipe();

    constructor(layoutService: DynamicFormLayoutService,
                validationService: DynamicFormValidationService) {
        super(layoutService, validationService);
    }

    // TODO: Implement functionality
    public searchValues = (text: string, count: number): Observable<T[]> => {

    };

    public onValueAdding = (tag_model: TagModel): Observable<TagModel> => {


        // return this.service.create(request)
        //     .pipe(flatMap(choice_wellness_benefit_id => {
        //         const json = this.app_flatten_object_pipe.transform(
        //             // @ts-ignore
        //             {
        //                 choice_wellness_benefit_id: choice_wellness_benefit_id,
        //                 wellness_benefit: tag_model,
        //                 choice: {choice_id: this.model.choice_id}
        //             });
        //         return of(json);
        //     }));
    };

    public onValueRemoving = (tag_model: TagModel): Observable<TagModel> => {
       // return this.service.delete(request)
       //      .pipe(map(() => tag_model));
    };
}
