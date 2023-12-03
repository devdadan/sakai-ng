import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrefixService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/dataprefix`);
  }
  saveData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/dataprefix/${id}`, data);
  }
  deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/dataprefix/${id}`);
  }
  
}
@Injectable({
    providedIn: 'root',
  })
export class CoslaService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/cobermasalah`);
    }
  }

