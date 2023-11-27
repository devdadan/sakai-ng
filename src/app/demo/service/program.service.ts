import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
}) 
export class ReleaseService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/programrelease`);
  }
}
@Injectable({
    providedIn: 'root',
  })
export class SimulasiService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/programsimulasi`);
    }
  }
  @Injectable({
    providedIn: 'root',
  })
  export class IkioskService {
    private apiUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/programikiosk`);
    }
  }
