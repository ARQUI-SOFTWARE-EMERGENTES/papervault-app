import { Observable, catchError, retry, throwError } from 'rxjs';
import { Research } from '../../app/models/research.model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ResearchService {
    basePath = 'http://34.68.253.177/api/v1/researchs';

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

  create(item: any): Observable<Research> {
    return this.http.post<Research>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getAll(search: string): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}?search=${search}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getById(id: any): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getRevision(): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}/revision`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  approve(id: any): Observable<any> {
    return this.http.put(`${this.basePath}/approve/${id}`, {}, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  reject(id: any): Observable<any> {
    return this.http.put(`${this.basePath}/reject/${id}`, {}, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getApproved(): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}/status/approved`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getPending(): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}/status/pending`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }

  getRejected(): Observable<Research> {
    return this.http.get<Research>(`${this.basePath}/status/rejected`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError));
  }
}
