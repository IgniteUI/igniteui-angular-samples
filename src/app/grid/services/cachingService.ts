import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CachingService {
    private cache = new Map<string, [Date, HttpResponse<any>]>();
    public set(key, value, ttl = null) {
        if (ttl) {
            const expires = new Date();
            expires.setSeconds(expires.getSeconds() + ttl);
            this.cache.set(key, [expires, value]);
        } else {
            this.cache.set(key, [null, value]);
        }
    }

    public get(key): HttpResponse<any> {
        const cacheItem = this.cache.get(key);
        if (!cacheItem) {
            return null;
        }
        const expires = cacheItem[0];
        const httpResponse = cacheItem[1];

        // Delete expired keys from cache
        const now = new Date();
        if (expires && expires.getTime() < now.getTime()) {
            this.cache.delete(key);
            return null;
        }
        return httpResponse;
    }
}
