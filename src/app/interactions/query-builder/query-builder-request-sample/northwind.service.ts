import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public postQueryBuilderResult(body: Object): Observable<Object> {
    return this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, body);
  }
}
