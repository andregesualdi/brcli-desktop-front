import { Injectable } from '@angular/core';
import { RestService } from './infrastructure/rest.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Agenda } from '../shared/models/agenda.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(
    private rest: RestService
  ) { }

  public recuperarAgenda(usuario: string, data: Date): Observable<Agenda> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('data-agenda', data.getTime().toString());
    return this.rest.get(environment.api.endpoints.agenda,
      headers);
  }
}
