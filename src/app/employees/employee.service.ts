
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from './../../environments/environment';
import { IEmployee } from './../employees/employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  constructor(private _httpClient: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    let _url = environment.API_ENDPOINT;
    return this._httpClient.get(_url)
      .catch(this.handleError);
  }
  getEmployeeByCode(empCode): Observable<IEmployee> {
    let _url = environment.API_ENDPOINT + empCode;
    return this._httpClient.get(_url)
      .catch(this.handleError);
  }
  handleError(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
