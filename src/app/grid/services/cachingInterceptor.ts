import {
    HttpEvent,
    HttpHandler,
    HttpHeaders,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { CachingService } from "./cachingService";

const ALIVE_IN_SECONDS: number = 15;
const DATA_URL_PATH: string = "https://www.igniteui.com/api/products";

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
    // Based on https://angular.io/guide/http#caching
    constructor(private cache: CachingService) {
    }

    public intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isCachable(request)) {
            return next.handle(request);
        }
        const cachedResponse = this.cache.get(request.url);
        return cachedResponse
            ? of(cachedResponse)
            : this.sendRequest(request, next);
    }

    private isCachable(request: HttpRequest<any>) {
        return request.method === "GET" && request.url.startsWith(DATA_URL_PATH);
    }

    private sendRequest(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // No headers allowed in request
        const noHeaderRequest = request.clone({ headers: new HttpHeaders() });
        return next.handle(noHeaderRequest).pipe(
            tap((event) => {
                if (event instanceof HttpResponse) {
                    this.cache.set(request.url, event, ALIVE_IN_SECONDS);
                }
            }));
    }
}
