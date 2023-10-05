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
import { NovoAgendamento } from '../shared/models/novo-agendamento.model';
import { AgendamentoPaciente } from '../shared/models/agendamento-paciente.model';
import { AvaliacaoFisica } from '../shared/models/avaliacao-fisica.model';
import { Meta } from '../shared/models/meta.model';
import { PlanoAlimentar } from '../shared/models/plano-alimentar.model';

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

  public agendarConsulta(usuario: string, codigoPaciente: string, agendamento: NovoAgendamento): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.agendar, agendamento, headers);
  }

  public proximaConsultaPaciente(usuario: string, codigoPaciente: string): Observable<AgendamentoPaciente> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.consulta, headers);
  }

  public salvarAvaliacao(usuario: string, avaliacao: AvaliacaoFisica, codigoPaciente: string): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.registrarAvaliacaoFisica, avaliacao, headers);
  }

  public recuperarAvaliacao(usuario: string, codigoPaciente: string): Observable<AvaliacaoFisica> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.avaliacaoFisica, headers);
  }

  public recuperarMetas(usuario: string, codigoPaciente: string): Observable<Meta[]> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.metas, headers);
  }

  public salvarMetas(usuario: string, codigoPaciente: string, metas: Meta[]): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.salvarMetas, metas, headers);
  }

  public recuperarPlano(usuario: string, codigoPaciente: string): Observable<PlanoAlimentar> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.planoAlimentar, headers);
  }

  public salvarPlano(usuario: string, codigoPaciente: string, planoAlimentar: PlanoAlimentar): Observable<ResponseSucesso> {
    const headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers.append('x-usuario', usuario);
    headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.planoAlimentar, planoAlimentar, headers);
  }
}
