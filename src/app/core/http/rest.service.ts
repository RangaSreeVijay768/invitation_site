// @ts-ignore
import {Restangular} from 'ngx-restangular';
import {CommonsService} from '@core/commons.service';
import {HttpClient} from "@angular/common/http";

export class RestService {

    end_point: string;
    secured_end_point: string;

    constructor(protected httpClient: HttpClient) {

    }


    serialize(obj): any {
        return CommonsService.serialize(obj);
    }

    getEndPoint() {
        return `${this.end_point || ''}`
    }

    getSecuredEndPoint(): string {
        return `${this.secured_end_point || ''}`;
    }
}
