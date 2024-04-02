import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { ResponseModel } from '../_helper/response-model';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  uri = "/user/param/v1";
  private apiUrl = 'http://localhost:5000/recipe';

  gets(id: number): Observable<ResponseModel> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<ResponseModel>(url);
  }
  
  getAll(): Observable<ResponseModel[]> {
    const url = this.apiUrl
    return this.http.get<ResponseModel[]>(url);
  }

  post(): Observable<Recipe> {
    const newOder = {
      order: []
    }
    return this.http.post<Recipe>(this.apiUrl, newOder, httpOptions);
  }

  put(id: number, data: Recipe[]): Observable<Recipe[]> {
    console.log("put data::::",data);
    
    const url = `${this.apiUrl}/${id}`
    const newOder = {
      order: data
    }
    return this.http.put<Recipe[]>(url, newOder, httpOptions);
  }
  delete(id: number): Observable<Recipe[]>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Recipe[]>(url ,httpOptions);
  }
  
  
  
}
