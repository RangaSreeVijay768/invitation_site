import {Component, EventEmitter, Injector,Input, Output,TemplateRef, ViewChild} from "@angular/core";
import {CommonsService} from "@core/commons.service";
import {Subscription} from "rxjs";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {Core} from "@core/core.models";
import SortedPaginatedRequest = Core.SortedPaginatedRequest;
import {CoreDatatableComponent} from "@core/components/core-datatable.component";
import {TasksGetAllWellnessBenefitsNoTemplateComponent} from "@tasks/components/tasks-get-all-wellness-benefits/tasks-get-all-wellness-benefits.component";

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component extends SortedPaginatedBaseComponent {

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
    }

    createRequestData(first?: number, count?: number,column_name?: string, column_order?: string): SortedPaginatedRequest.Request {
        let request = new SortedPaginatedRequest.Request();
        request = this.setLimits(request, first, count);
        request=this.setColumnOrders(request,column_name,column_order)
        return request;
    }
}

@Component({
    selector: '<%= dasherize(name) %>-no-template',
    templateUrl: './<%= dasherize(name) %>-no-template.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>NoTemplateComponent extends <%= classify(name) %>Component
{
}

@Component({
    selector: '<%= dasherize(name) %>-datatable',
    templateUrl: './<%= dasherize(name) %>-datatable.component.html',
    styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>DatatableComponent extends CoreDatatableComponent<<%= classify(name) %>NoTemplateComponent, T>
{


    constructor(injector: Injector) {
        super(injector);
    }


    initializeComponent() {
        this.columns = [
            // {name: 'Name', prop: 'wellness_benefit_name'},
            // {name: 'Actions', prop: 'user_account', cellTemplate: this.actionsTemplate},
        ];

        // this.component.wellnessBenefitsReceived.subscribe(value => {
        //     this.rows = value;
        // })
    }

    makeAPICall(first: number, count: number) {
        // this.component.getAllWellnessBenefits(this.component.createRequestData(first, count));
    }
}
