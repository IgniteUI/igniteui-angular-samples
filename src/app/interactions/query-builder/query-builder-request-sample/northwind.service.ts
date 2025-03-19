import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public postQueryBuilderResult(body: Object): Observable<Object> {
    // const body = {
    //   entity: 'string',
    //   returnFields: [
    //     'string'
    //   ],
    //   operator: 'And',
    //   filteringOperands: [
    //     {
    //       fieldName: 'string',
    //       ignoreCase: true,
    //       condition: {
    //         name: 'string',
    //         isUnary: true,
    //         iconName: 'string'
    //       },
    //       searchVal: {},
    //       searchTree: null,
    //       operator: 'And',
    //       filteringOperands: [
    //         null
    //       ]
    //     }
    //   ]
    // };
    // return this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, body);
    return this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, body)
    .pipe();
  }
}
