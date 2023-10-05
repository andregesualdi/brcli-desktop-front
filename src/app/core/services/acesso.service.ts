import { Injectable } from '@angular/core';
import { RestService } from './infrastructure/rest.service';
import { RequisicaoLogin } from '../shared/models/requisicao-login.model';
import { Observable } from 'rxjs';
import { Login } from '../shared/models/login.model';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { RecuperarSenha } from '../shared/models/recuperar-senha.model';
import { EmailEnviado } from '../shared/models/email-enviado.model';

@Injectable({
  providedIn: 'root'
})
export class AcessoService {

  constructor(
    private rest: RestService
  ) { }

  public logar(req: RequisicaoLogin): Observable<Login> {
    return this.rest.post(environment.api.endpoints.login,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }

  public recuperarSenha(req: RecuperarSenha): Observable<EmailEnviado> {
    return this.rest.post(environment.api.endpoints.recuperarSenha,
      req,
      new HttpHeaders().set('Content-type', 'application/json'));
  }
}
