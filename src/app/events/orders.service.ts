import {Injectable} from "@angular/core";
import {RestService} from "@core/http/rest.service";
import {Restangular} from "ngx-restangular";
import {EventsConstants} from "@events/events.constants";
import {CoreHttpClient} from "@core/http/http.module";
import {EventsRequests} from "@events/events.models";
import GetOrderCompleteInfoByOrderPayment = EventsRequests.GetOrderCompleteInfoByOrderPayment;

@Injectable({
    providedIn: 'root'
})
export class OrdersService extends RestService {

    ordersService: Restangular;
    ordersSecuredService: Restangular;

    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = EventsConstants.ORDERS_ENDPOINT;
        this.secured_end_point = EventsConstants.ORDERS_SECURED_ENDPOINT;
    }

    getOrderCompleteInfoByOrderPayment(request: GetOrderCompleteInfoByOrderPayment.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/ordercompleteinfo/orderpayment`,
            {params: this.serialize(request)});
    }


}
