// AuthService
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api';
  private authTokenKey = 'authToken';
  
  constructor(private http: HttpClient) {}

  private isAuthenticated: boolean = false;

  public login(username: string, password: string): Observable<any> {
    const loginData = { username, password };
  
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      catchError(this.handleError),
      tap((response) => {
        this.setAuthToken(response.token);
        this.isAuthenticated = true;
      })
    );
  }
  private setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }
  public getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }
  public logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem(this.authTokenKey);
  }

  public getIsAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Terjadi kesalahan:', error.error.message);
    } else {
      console.error(
        `Server mengembalikan kode ${error.status}, body: ${error.error}`
      );
    }
  
    return throwError('Terjadi kesalahan; silakan coba lagi nanti.');
  }
  
}
