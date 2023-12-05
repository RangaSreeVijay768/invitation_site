import {Inject, Injectable, InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpBackend,
  HttpClient,
  HttpClientModule,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {catchError, concatMap, Observable} from 'rxjs';
import {environment} from '@environment/environment';
import {AuthService} from '@core/auth.service';
import {CommonsService} from '@core/commons.service';

export class InterceptingHandler implements HttpHandler {
  private chain: HttpHandler;

  constructor(private backend: HttpBackend, private interceptors: HttpInterceptor[]) {
    this.buildChain()
  }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.chain.handle(req);
  }

  private buildChain(): void {
    this.chain = this.interceptors.reduceRight((next, interceptor) =>
        new InterceptorHandler(next, interceptor),
      this.backend
    );
  }
}

export class InterceptorHandler implements HttpHandler {
  constructor(private next: HttpHandler, private interceptor: HttpInterceptor) {
  }

  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return this.interceptor.intercept(req, this.next);
  }
}

const CORE_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>(
  'An abstraction on feature HttpInterceptor[]'
);

export const CORE_TEST_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>(
  'An abstraction on feature HttpInterceptor[]'
);

export const BASE_URL_HTTP_INTERCEPTORS = new InjectionToken<HttpInterceptor[]>(
  'An abstraction on feature HttpInterceptor[]'
);

@Injectable()
export class CoreHttpClient extends HttpClient {
  constructor(
    backend: HttpBackend,
    @Inject(HTTP_INTERCEPTORS) interceptors: HttpInterceptor[],
    @Inject(BASE_URL_HTTP_INTERCEPTORS) featureInterceptors: HttpInterceptor[],
  ) {
    // super(new InterceptingHandler(
    //     backend,
    //     [interceptors, featureInterceptors].flat()
    // ));
    const mergedInterceptors = interceptors.concat(...featureInterceptors);

    super(new InterceptingHandler(backend, mergedInterceptors));
  }
}

@Injectable()
export class CommonHttpInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request);
  }
}


@Injectable()
export class InvitationApiUrlInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = request.clone({url: `${environment.apiUrls.baseUrl}${request.url}`});
    return next.handle(apiReq);
  }
}

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(protected authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return CommonsService.promiseToObservable(this.authService.getAuthToken()).pipe(concatMap(
      token => {
        const headers = {};
        headers['Authorization'] = `Bearer ${token}`;
        request = request.clone({
          headers: new HttpHeaders(headers)
        });
        return next.handle(request);
      }), catchError(error => {
      return next.handle(request);
    }));
  }
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: []
})
export class HttpModule {
}
