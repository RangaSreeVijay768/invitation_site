import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {CommonsService} from '@core/commons.service';
import {BlastsService} from '@app/blasts/blasts.service';
import {BlastsRequests} from '@app/blasts/blasts.models';
import GetBlastList = BlastsRequests.GetBlastList;
// import BlastList = Blasts.BlastList;
// import {Events} from "@core/core.models";
// import Blasts = Events.Blasts;

@Injectable()
export class GetBlastListResolver implements Resolve<Observable<GetBlastList.Response>> {

  constructor(protected blastsService: BlastsService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    // console.log('entered resolver');
    const request = new GetBlastList.Request();
    request.blast_list_id = route.paramMap.get('blastId');
    return this.blastsService.getBlastList(request).pipe(CommonsService.logResponse, CommonsService.deserializeMap(GetBlastList.Response));
  }
}
