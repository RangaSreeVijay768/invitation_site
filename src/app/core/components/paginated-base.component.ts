import {BaseComponent} from '@core/components/base.component';
import { Input, Directive } from '@angular/core';
import {Core} from '@core/core.models';
import PaginatedRequest = Core.PaginatedRequest;
import SortedPaginatedRequest = Core.SortedPaginatedRequest;
// import {Moment} from "moment";
import {DateTime} from 'luxon';
import StartEndTimeRequest = Core.StartEndTimeRequest;
import {AppOffsetToPageNumberPipe} from "@core/core.pipe";

@Directive()
export abstract class PaginatedBaseComponent extends BaseComponent {

  @Input()
  first: number;
  @Input()
  count: number;

  app_offset_to_page_number_pipe = new AppOffsetToPageNumberPipe();

  setLimits<T extends PaginatedRequest>(request: T, first?: number, count?: number): T {
    request.first = first || this.first;
    request.count = count || this.count;
    if (request.count) {
      request.page_number = this.app_offset_to_page_number_pipe.transform((request.first||0), request.count)||1;
      request.page = request.page_number||1;
    }
    return request;
  }
}


@Directive()
export abstract class SortedPaginatedBaseComponent extends PaginatedBaseComponent {

  @Input()
  columnName: string;
  @Input()
  columnOrder: string;

  setColumnOrders<T extends SortedPaginatedRequest>(request: T, column_name?: string, column_order?: string): T {
    request.column_name = column_name || this.columnName;
    request.column_order = column_order || this.columnOrder;
    return request;
  }

  setLimitsAndOrders<T extends SortedPaginatedRequest>(request: T): T {
    request = this.setLimits(request);
    request = this.setColumnOrders(request);
    return request;
  }

}

@Directive()
export abstract class StartEndTimeBaseComponent extends BaseComponent {

  @Input()
  startTime: DateTime;
  @Input()
  endTime: DateTime;

  setStartAndEndTime<T extends StartEndTimeRequest>(request: T, start_time?: DateTime, end_time?: DateTime): T {
    request.start_time = start_time || this.startTime;
    request.end_time = end_time || this.endTime;
    return request;
  }
}
