import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CommonsService} from '@core/commons.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {EventsService} from '@events/events.service';
import {EventsRequests} from '@events/events.models';
import {OrdersService} from "@events/orders.service";
import GetEvent = EventsRequests.GetEvent;
import GetEventInfo = EventsRequests.GetEventInfo;
import GetUserEventInfo = EventsRequests.GetUserEventInfo;
import GetOrderCompleteInfoByOrderPayment = EventsRequests.GetOrderCompleteInfoByOrderPayment;

@Injectable()
export class GetEventResolver implements Resolve<Observable<GetEvent.Response>> {

    constructor(protected eventsService: EventsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetEvent.Request();
        request.event_id = route.paramMap.get('eventId');
        return this.eventsService.getEvent(request)
            .pipe(CommonsService.logResponse, CommonsService.deserializeMap(GetEvent.Response));
    }
}

@Injectable()
export class GetEventInfoResolver implements Resolve<Observable<GetEventInfo.Response>> {

    constructor(protected eventsService: EventsService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetEventInfo.Request();
        request.event_id = route.paramMap.get('eventId');
        return this.eventsService.getEventInfo(request)
            .pipe(CommonsService.logResponse, CommonsService.deserializeMap(GetEventInfo.Response));
    }
}

@Injectable()
export class GetUserEventInfoResolver implements Resolve<Observable<GetUserEventInfo.Response>> {

    constructor(protected eventsService: EventsService,) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetUserEventInfo.Request;
        request.event_id = route.paramMap.get('eventId');
        return this.eventsService.getUserEventInfo(request)
            .pipe(CommonsService.deserializeMap(GetUserEventInfo.Response));
    }
}

@Injectable()
export class GetOrderCompleteInfoByOrderPaymentResolver
    implements Resolve<Observable<GetOrderCompleteInfoByOrderPayment.Response>> {

    constructor(protected ordersService: OrdersService,) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        const request = new GetOrderCompleteInfoByOrderPayment.Request;
        request.order_payment = route.paramMap.get('orderPaymentId');
        return this.ordersService.getOrderCompleteInfoByOrderPayment(request)
            .pipe(CommonsService.deserializeMap(GetOrderCompleteInfoByOrderPayment.Response));
    }
}
