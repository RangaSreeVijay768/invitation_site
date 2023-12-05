import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, Directive, Injector, Input, QueryList, ViewChildren} from '@angular/core';
import queue from 'async/queue';
import * as _lodash from 'lodash';
import {CommonsService} from '@core/commons.service';

@Directive()
export abstract class BaseInfiniteScrollComponent<T> extends BaseComponent implements AfterViewInit {

    private static DEFAULT_SCROLL_THROTTLE = 500;
    private static DEFAULT_NUMBER_OF_ITEMS = 6;

    @Input()
    items: any[];
    @Input()
    currentCount: number;
    @Input()
    numberOfItems: number;
    @Input()
    disableScroll: boolean;
    @Input()
    itemsFinished: boolean;
    @Input()
        // tslint:disable-next-line:ban-types
    removeDuplicate: Function;
    @Input()
    scrollThrottle: number;

    @ViewChildren('component') components: QueryList<T>;

    scrollingComponent: T;

    itemsUnique: any[];

    queue: any;


    constructor(injector: Injector) {
        super(injector);
        this.items = this.items || [];
        this.currentCount = this.items.length;
        this.numberOfItems = this.numberOfItems || BaseInfiniteScrollComponent.DEFAULT_NUMBER_OF_ITEMS;
        this.scrollThrottle = this.scrollThrottle || BaseInfiniteScrollComponent.DEFAULT_SCROLL_THROTTLE;

        this.queue = queue((task, callback) => {
            callback();
        }, 1);

    }

    resetScrolling() {
        this.items = [];
        this.itemsUnique = [];
        this.currentCount = this.items.length;
        this.disableScroll = false;
        this.itemsFinished = false;
    }

    ngAfterViewInit(): void {
        this.scrollingComponent = this.components.first;
        this.components.changes.subscribe((comps: QueryList<T>) => {
            this.scrollingComponent = comps.first;
        });
    }

    // TODO: Make this abstract once everything is done
    performScrolling() {
    }


    onScroll() {
        this.queue.push({}, () => {
            if (this.scrollingComponent && !this.disableScroll) {
                this.performScrolling();
            }
        });
    }

    print(data: any) {
        console.log(data);
    }


    addItems(itemResults) {
        if (itemResults && itemResults.length > 0) {
            this.items = this.items.concat(itemResults);
            if (!CommonsService.isNullOrUndefined(this.removeDuplicate) && this.items.length > 0) {
                this.itemsUnique = _lodash.uniqBy(this.items, value => this.removeDuplicate(value));
            }
            this.currentCount = this.items.length;
            this.disableScroll = false;
        } else {
            this.itemsFinished = true;
            this.disableScroll = true;
        }
        // this.onScroll();
    }


}
