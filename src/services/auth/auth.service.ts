import { Register } from '../../app/models/register.model';
import { BehaviorSubject, catchError, retry, throwError } from 'rxjs';
import { Login } from '../../app/models/login.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    basePath = 'http://127.0.0.1:3000/api/v1/auth';
  private authStatus = new BehaviorSubject<boolean>(false);
  authStatus$ = this.authStatus.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  login(item: Login) {
    return this.http.post(`${this.basePath}/signin`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }

  loginSuccess() {
    this.authStatus.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.authStatus.next(false);
  }

  register(item: Register) {
    return this.http.post(`${this.basePath}/signup`, JSON.stringify(item), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError));
  }
}
