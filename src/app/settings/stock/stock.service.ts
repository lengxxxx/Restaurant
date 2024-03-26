import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { ResponseModel } from 'src/app/_helpers/response-model';
import { stock } from './stock';
import { Ingredient } from '../ingredient/ingredient';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  uri = 'http://localhost:5000';
  private apiUrl = `${this.uri}/stock`

  gets(): Observable<stock[]> {
    return this.http.get<stock[]>(this.apiUrl);
  }

  post(data: stock): Observable<stock[]> {
    return this.http.post<stock[]>(this.apiUrl, data, httpOptions);
  }

  put(data: stock): Observable<stock[]> {
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.put<stock[]>(url, data, httpOptions);
  }

  getTemplate(): Observable<Ingredient[]> {
    let apiUrl = 'http://localhost:5000/ingredient';
    return this.http.get<Ingredient[]>(apiUrl);
  }

  delete(data: stock): Observable<stock[]> {
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.delete<stock[]>(url, httpOptions);
  }
}
