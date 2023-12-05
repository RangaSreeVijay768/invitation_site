import {AfterViewInit, Directive, Input, QueryList, ViewChildren} from '@angular/core';
// import {Moment} from 'moment';
import {DateTime} from 'luxon';
import {StartEndTimeBaseComponent} from '@core/components/paginated-base.component';
import {Core} from '@core/core.models';
import {
    AppLocalDateAggregateSumsToGraphDataPipe, CoreGraphDataToNamedSeriesPipe, CoreGroupByStringAndCountToGraphDataPipe
} from '@core/core.pipe';
import GraphData = Core.GraphData;
import LocalDateAggregateSum = Core.LocalDateAggregateSum;
import GroupByStringAndCount = Core.GroupByStringAndCount;

@Directive()
export abstract class CoreGraphComponent<T extends StartEndTimeBaseComponent> extends StartEndTimeBaseComponent
    implements AfterViewInit {

    @Input()
    view: any[];

    @Input()
    showXAxis: boolean;
    @Input()
    showYAxis: boolean;
    @Input()
    gradient: boolean;
    @Input()
    showLegend: boolean;
    @Input()
    showXAxisLabel: boolean;
    @Input()
    xAxisLabel: string;
    @Input()
    showYAxisLabel: boolean;
    @Input()
    yAxisLabel: string;
    @Input()
    showGridLines: boolean;
    @Input()
    colorScheme: any;
    @Input()
    height: any;
    @Input()
    fontColor: any;
    @Input()
    tooltipDisabled: boolean;

    @ViewChildren('component')
    components: QueryList<T>;

    api_component: T;
    graph_data: GraphData[];

    app_local_date_aggregate_sums_to_graph_data_pipe = new AppLocalDateAggregateSumsToGraphDataPipe();
    named_series:any;

    core_graph_data_to_named_series_pipe=new CoreGraphDataToNamedSeriesPipe();
    core_group_by_string_and_count_to_graph_data_pipe = new CoreGroupByStringAndCountToGraphDataPipe();

    color_scheme;

    ngAfterViewInit(): void {
        this.color_scheme = {
            domain: this.colorScheme || ['#00FFFF', '#00bfff', '#99e5ff', '#007399', '#00bfff']
        };
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.api_component = comps.first;
        });
    }

    xAxisTickFormatting(value: any) {
        return value;
    }

    yAxisTickFormatting(value: any) {
        return value;
    }


    refreshData(start_time?: DateTime, end_time?: DateTime) {
        if (this.api_component) {
            this.api_component.startTime = start_time;
            this.api_component.endTime = end_time;
            this.api_component.initializeComponent();
        }
    }

    setGraphData(data: LocalDateAggregateSum[]) {
        this.graph_data = this.app_local_date_aggregate_sums_to_graph_data_pipe.transform(data);
        console.log(data,this.graph_data);

    }

    setGraphDataFromGroupByStringAndCount(data: GroupByStringAndCount[]) {
        console.log(data);
        this.graph_data = this.core_group_by_string_and_count_to_graph_data_pipe.transform(data);
        this.named_series=this.core_graph_data_to_named_series_pipe.transform(this.graph_data,'releases')
        console.log(this.named_series);
    }
}
