import {ActivatedRoute, Params, QueryParamsHandling} from '@angular/router';
import {BaseComponent} from '@core/components/base.component';
import {AfterViewInit, Directive, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CommonsService} from "@core/commons.service";

@Directive()
export abstract class PageComponent extends BaseComponent implements AfterViewInit {

    activatedRoute: ActivatedRoute;
    routeParams: any;

    constructor(injector: Injector) {
        super(injector);
        this.activatedRoute = injector.get(ActivatedRoute);
        this.routeParams = {};
    }

    /**
     * @deprecated Dont use this. use getRouterParameterObservable(name)
     */
    getRouteParameter(name) {
        return this.activatedRoute.snapshot.data[name];
    }

    /**
     * @deprecated Dont use this. use getRouterParameterFromParentObservable(name,parentLevel)
     */
    getRouterParameterFromParent(name, parentLevel) {
        let currentParent: ActivatedRoute = this.activatedRoute;
        for (let i = 0; i < parentLevel; i++) {
            currentParent = currentParent.parent;
            if (currentParent == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
        }
        return currentParent.snapshot.data[name];

    }

    getRouterParameterObservable<T>(name: string, route?: ActivatedRoute): Observable<T> {
        route = route || this.activatedRoute;
        return route.data.pipe(map(x => x[name]));
    }

    getRouterParameterFromParentObservable<T>(name: string, parentLevel: number): Observable<T> {
        let currentParent: ActivatedRoute = this.activatedRoute;
        for (let i = 0; i < parentLevel; i++) {
            currentParent = currentParent.parent;
            if (currentParent == null) {
                throw new Error('No more parents after the level ' + parentLevel);
            }
        }
        return this.getRouterParameterObservable(name, currentParent);
    }

    reloadPage() {
        window.location.reload();
    }

    getQueryParameterObservable<T>(name: string): Observable<T> {
        return this.activatedRoute.queryParams.pipe(map(x => x[name]));
    }

    updateQueryParams(queryParams: Params, queryParamsHandling: QueryParamsHandling = 'merge') {
        this.router.navigate(
            [],
            {
                relativeTo: this.activatedRoute,
                queryParams,
                queryParamsHandling
            });
    }

    // noinspection TsLint
    ngOnInit() {
        this.routeParams = this.activatedRoute.snapshot.data;
        super.ngOnInit();
    }

    navigateToProfileProgramsPage() {
        this.router.navigateByUrl('/profile/programs/pending');
    }

    ngAfterViewInit(): void {
    }

    hardReloadPage() {
        window.location.reload();
    }
}
