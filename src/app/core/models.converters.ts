
import {JsonConverter, JsonCustomConvert} from 'json2typescript';
import {CommonsService} from '@core/commons.service';
// import {Moment} from 'moment';
// import * as moment from 'moment'
import {DateTime} from 'luxon';

export namespace ModelsConverters {


    @JsonConverter
    export class DateConverter implements JsonCustomConvert<DateTime> {
        serialize(date: DateTime): any {
            return CommonsService.getDateStringFromDatTime(date);
        }

        deserialize(date: any): DateTime {
            return CommonsService.getDateTimeFromDateString(date);
        }
    }

    @JsonConverter
    export class IntToStringConverter implements JsonCustomConvert<string> {
        serialize(int_as_string: string): number {
            return parseInt(int_as_string, 10);
        }

        deserialize(int_as_number: number): string {
            return '' + int_as_number;
        }
    }

    @JsonConverter
    export class DateTimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): string {
            return CommonsService.getDateTimeStringFromDateTime(time);
        }

        deserialize(time: any): DateTime {
            if (time) {
                // console.log(, CommonsService.getDateTimeFromDateTimeString(time));
                return CommonsService.getDateTimeFromDateTimeString(time);
            }
            return undefined;
        }
    }

    @JsonConverter
    export class DateTimeWithoutZoneConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): string {
            return CommonsService.getDateTimeStringFromDateTime(time, CommonsService.DEFAULT_DATE_TIME_WITHOUT_FORMAT);
        }

        deserialize(time: any): DateTime {
            if (time) {
                // console.log(, CommonsService.getDateTimeFromDateTimeString(time));
                return CommonsService.getDateTimeFromDateTimeString(time,
                    CommonsService.DEFAULT_DATE_TIME_WITHOUT_FORMAT);
            }
            return undefined;
        }
    }


    @JsonConverter
    export class TimestampToDateTimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): number {
            return CommonsService.getTimestampFromDateTime(time);
        }

        deserialize(time: number): DateTime {
            return DateTime.fromSeconds(time / 1000);
        }
    }

    @JsonConverter
    export class TimestampConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): number {
            return CommonsService.getTimestampFromDateTime(time);
        }

        deserialize(time: number): DateTime {
            return CommonsService.getDateTimeFromTimestamp(time);
        }
    }

    @JsonConverter
    export class TimeConverter implements JsonCustomConvert<DateTime> {
        serialize(time: DateTime): any {
            return CommonsService.getTimeStringFromDateTime(time);
        }

        deserialize(time: any): DateTime {
            return CommonsService.getDateTimeFromTimeString(time);
        }
    }

    @JsonConverter
    export class ArrayToStringConverter implements JsonCustomConvert<string[]> {
        serialize(time: string[]): string {
            return time.join(',');
        }

        deserialize(time: string): string[] {
            return time.split(',');
        }
    }

    @JsonConverter
    export class StringToIntConverter implements JsonCustomConvert<number> {

        serialize(value: number): string {
            return '' + value;
        }

        deserialize(value: string): number {
            return CommonsService.isNumber(parseInt(value, 10)) ? parseInt(value, 10) : 0;
        }
    }
}

import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Injectable } from "@angular/core";

@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
    parse(value: string): NgbDateStruct {
        if (value) {
            const dateParts = value.trim().split("/");
            if (dateParts.length === 1 && isNumber(dateParts[0])) {
                return { day: toInteger(dateParts[0]), month: null, year: null };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
                return {
                    day: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    year: null
                };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
                return {
                    day: toInteger(dateParts[0]),
                    month: toInteger(dateParts[1]),
                    year: toInteger(dateParts[2])
                };
            }
        }
        return null;
    }

    format(date: NgbDateStruct): string {
        return date
            ? `${isNumber(date.month) ? padNumber(date.month) : ""}/${isNumber(date.day) ? padNumber(date.day) : ""}/${
                date.year
            }`
            : "";
    }
}
export function toInteger(value: any): number {
    return parseInt(`${value}`, 10);
}

export function isNumber(value: any): value is number {
    return !isNaN(toInteger(value));
}

export function padNumber(value: number) {
    if (isNumber(value)) {
        return `0${value}`.slice(-2);
    } else {
        return "";
    }
}
