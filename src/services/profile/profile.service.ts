import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Profile } from '../../app/models/profile.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
    basePath = "http://localhost:3000/api/v1/researchers"

  httpOptions = {}

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.authStatus$.subscribe(status => {
      this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token') || ''
        })
      }
    });
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${JSON.stringify(error.error)}`
      );
    }
    return throwError(() => new Error('Something happened with request, please try again later'));
  }

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.basePath}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  update(id: any, item: any): Observable<Profile> {
    return this.http.put<Profile>(`${this.basePath}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
