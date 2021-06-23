import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }

  getLocation(param): Observable<any> {
    return this.http.get(`http://xxxxxxxx`, {});
  }
}
