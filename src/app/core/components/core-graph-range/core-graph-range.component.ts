import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
// import {Moment} from 'moment';
import {DateTime} from 'luxon';
import {Core} from '@core/core.models';
import GraphDurationRange = Core.GraphDurationRange;

@Component({
    selector: 'core-graph-range',
    templateUrl: './core-graph-range.component.html',
    styleUrls: ['./core-graph-range.component.scss']
})
export class CoreGraphRangeComponent extends BaseComponent {

    @Input()
    currentTime: DateTime;
    @Input()
    startTime: DateTime;
    @Input()
    endTime: DateTime;
    @Input()
    labelClasses: string | string[];

    @Output()
    graphDurationRangeSelected = new EventEmitter<GraphDurationRange>();

    graph_duration_ranges: GraphDurationRange[] = [];
    selected_range: GraphDurationRange = new GraphDurationRange();

    constructor(injector: Injector) {
        super(injector);
    }

    initializeComponent() {
        this.graph_duration_ranges = [
            this.getGraphDurationRange(this.currentTime.minus({weeks: 1}).startOf('day'),
                this.currentTime.minus({days: 1}).endOf('day'), '1 Week'),
            this.getGraphDurationRange(this.currentTime.minus({months: 1}).startOf('day'),
                this.currentTime.minus({days: 1}).endOf('day'), '1 Month'),
            this.getGraphDurationRange(this.currentTime.minus({months: 3}).startOf('day'),
                this.currentTime.minus({days: 1}).endOf('day'), '3 Months'),
        ];
        this.selectGraphRange(this.graph_duration_ranges[1]);
    }

    getGraphDurationRange(start_time: DateTime, end_time: DateTime, display_value: string) {
        const range = new GraphDurationRange();
        range.start_time = start_time;
        range.end_time = end_time;
        range.display_value = display_value;

        return range;
    }

    selectGraphRange(range: GraphDurationRange) {
        console.log(range);
        this.selected_range = range;
        this.graphDurationRangeSelected.emit(range);
    }

}
