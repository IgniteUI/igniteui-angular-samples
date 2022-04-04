import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { DATA } from '../data/pivot-data-noop';

@Injectable({
  providedIn: 'root'
})
export class PivotDataService {

  constructor() { }

  public getData(): Observable<any> {
    // simulate http request response
    return of(DATA)
      .pipe(
        delay(1000),
        take(1),
        map((data: any) => {
          return data;
        })
      );
  }
}
