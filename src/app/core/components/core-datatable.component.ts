import {BaseComponent} from "@core/components/base.component";
import {Directive, Injector, Input, ViewChild} from "@angular/core";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {AppPageNumberToOffsetPipe} from "@core/core.pipe";
import {SortedPaginatedBaseComponent} from "@core/components/paginated-base.component";
import {CommonsService} from "@core/commons.service";

@Directive()
export abstract class CoreDatatableComponent<T extends SortedPaginatedBaseComponent, B> extends BaseComponent {
    rows: B[];

    COLUMN_MODE = ColumnMode;
    app_page_number_to_offset_pipe = new AppPageNumberToOffsetPipe();
    columns: any[];
    current_page: any = {};

    default_count: number;

    @Input()
    count: number;
    @Input()
    columnName: string;
    @Input()
    columnOrder: string;

    @Input()
    totalCount = 1000;

    @ViewChild('component', {static: true})
    component: T;
    @ViewChild(DatatableComponent, {static: true})
    table: DatatableComponent;


    constructor(injector: Injector) {
        super(injector);
    }

    pagination_options = [
        10, 25, 50, 100
    ];

    initializeComponent() {
        this.default_count = 10 || this.count;
        this.columns = [
            // {name: 'User Account', prop: 'user_account', cellTemplate: this.userAccountTemplate},

        ];
    }

    abstract makeAPICall(first: number, count: number, column_name?: string, column_order?: string);

    setColumns(column_name?: string, column_order?: string) {
        this.component.columnName = column_name;
        this.component.columnOrder = column_order;
    }

    getSortProps(): any {
        return {};
    }

    getNextPage($event) {
        const first = this.app_page_number_to_offset_pipe.transform($event.offset + 1, $event.pageSize);
        this.makeAPICall(first, $event.pageSize);
    }

    refreshDatatable() {
        const pageSize = (this.current_page.pageSize || 0);
        const first = this.app_page_number_to_offset_pipe.transform((this.current_page.offset || 0) + 1, pageSize);

        this.makeAPICall(first, this.current_page.pageSize);
    }


    onSort(event) {
        const sort = event.sorts[0];
        const sort_props = this.getSortProps();
        const column_name = this.getSortProps()[sort.prop] || sort.prop;
        const column_order = sort.dir === 'desc' ? 'DESC' : 'ASC';
        this.setColumns(column_name, column_order);
        this.refreshDatatable();
    }

    public changeRowLimits(event) {
        this.count = CommonsService.convertToNumber(event);
        this.component.count = this.count;
        this.refreshDatatable();
    }
}
