import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFormDataService {

  _url = 'http://localhost:3000/add';

  constructor(public _httpClient: HttpClient ) { }

  add(userData: any) {
    return this._httpClient.post<any>(this._url, userData)
    .pipe(catchError(this.errorHandler)) // wychwycenie błędu
    }
    errorHandler(error: HttpErrorResponse) {
    return throwError(() => error);
    }
   

}
