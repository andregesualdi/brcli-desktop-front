import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public get(path: string, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}${environment.api.context}${path}`, {
      headers: headers
    });
  }

  public post(path: string, body: any, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}${environment.api.context}${path}`, body, {
      headers: headers
    });
  }

  public put(path: string, body: any, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}${environment.api.context}${path}`, body, {
      headers: headers
    });
  }
}
