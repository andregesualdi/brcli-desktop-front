import { Injectable } from '@angular/core';
import { RestService } from './infrastructure/rest.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { Agenda } from '../shared/models/agenda.model';
import { Paciente } from '../shared/models/paciente.model';
import { CadastrarPaciente } from '../shared/models/cadastrar-paciente.model';
import { ResponseSucesso } from '../shared/models/response-sucesso.model';
import { DadosPaciente } from '../shared/models/dados-paciente.model';
import { PerfilPaciente } from '../shared/models/perfil-paciente.model';
import { CodigoAcessoGerado } from '../shared/models/codigo.model';

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

  public recuperarPacientes(usuario: string): Observable<Paciente[]> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    return this.rest.get(environment.api.endpoints.pacientes,
      headers);
  }

  public cadastrarPaciente(usuario: string, paciente: CadastrarPaciente): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    return this.rest.post(environment.api.endpoints.cadastroPaciente, paciente, headers);
  }

  public editarPaciente(usuario: string, pacienteEditado: DadosPaciente): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    return this.rest.post(environment.api.endpoints.editarPaciente, pacienteEditado, headers);
  }

  public recuperarPerfil(usuario: string, codigoPaciente: string): Observable<PerfilPaciente> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.perfilPaciente, headers);
  }

  public gerarCodigo(usuario: string, codigoPaciente: string): Observable<CodigoAcessoGerado> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.gerarCodigo, headers);
  }
}
