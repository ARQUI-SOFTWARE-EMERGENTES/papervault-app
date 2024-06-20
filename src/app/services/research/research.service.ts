import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Research } from '../../models/research.model';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResearchService {

  basePath = 'http://localhost:3000/api/v1/researchs';

  httpOptions = {}
  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage?.getItem('token') || ''
      })
    }
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

  getAll(): Observable<Research> {
    return this.http.get<Research>(this.basePath, this.httpOptions)
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
}
