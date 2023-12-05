import {Directive, Injector, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AuthService} from '@core/auth.service';
import {Users} from '@core/core.models';
import {CommonsService} from '@core/commons.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NotificationsService} from 'angular2-notifications';
import UserAccount = Users.UserAccount;
import {NgxGlobalEventsService} from "ngx-global-events";

@Directive()
export abstract class BaseComponent implements OnInit {

    protected router: Router;
    protected authService: AuthService;
    protected modalService: NgbModal;
    protected notificationsService: NotificationsService;
    protected ngxGlobalEventsService: NgxGlobalEventsService;

    loggedAccount: UserAccount;

    constructor(protected injector: Injector) {
        this.router = injector.get(Router);
        this.authService = injector.get(AuthService);
        this.loggedAccount = this.authService.loggedAccount;
        this.modalService = injector.get(NgbModal);
        this.notificationsService = injector.get(NotificationsService);
        this.ngxGlobalEventsService = injector.get(NgxGlobalEventsService)
    }

    ngOnInit() {
        this.initializeComponent();
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // close all open modals
                this.modalService.dismissAll();
            }
        });
    }

    abstract initializeComponent();

    makeServiceCallWithIdIfObjectNull(object, request, call?, error?) {
        if (CommonsService.isNullOrUndefined(object)) {
            if (!CommonsService.isNullOrUndefined(request)) {
                if (!CommonsService.isNullOrUndefined(call)) {
                    call(request);
                }
            } else {
                if (!CommonsService.isNullOrUndefined(error)) {
                    error(request);
                }
            }
        }
    }
}
