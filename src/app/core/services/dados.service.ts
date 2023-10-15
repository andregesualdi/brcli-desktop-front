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
import { PlanoAlimentar } from '../shared/models/plano-alimentar.model';
import { PlanoMetas } from '../shared/models/plano-metas.model';
import { HoraUtils } from '../shared/utils/hora.utils';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  constructor(
    private rest: RestService
  ) { }

  public recuperarAgenda(data: Date): Observable<Agenda> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('data-agenda', HoraUtils.formatarData(data));
    return this.rest.get(environment.api.endpoints.agenda, headers);
  }

  public recuperarPacientes(): Observable<Paciente[]> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.get(environment.api.endpoints.pacientes,
      headers);
  }

  public cadastrarPaciente(paciente: CadastrarPaciente): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.post(environment.api.endpoints.cadastroPaciente, paciente, headers);
  }

  public editarPaciente(pacienteEditado: DadosPaciente): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    return this.rest.post(environment.api.endpoints.editarPaciente, pacienteEditado, headers);
  }

  public recuperarPerfil(codigoPaciente: string): Observable<PerfilPaciente> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.perfilPaciente, headers);
  }

  public gerarCodigo(codigoPaciente: string): Observable<CodigoAcessoGerado> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.gerarCodigo, headers);
  }

  public agendarConsulta(codigoPaciente: string, agendamento: NovoAgendamento): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.agendar, agendamento, headers);
  }

  public proximaConsultaPaciente(codigoPaciente: string): Observable<AgendamentoPaciente> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.consulta, headers);
  }

  public salvarAvaliacao(avaliacao: AvaliacaoFisica, codigoPaciente: string): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.registrarAvaliacaoFisica, avaliacao, headers);
  }

  public recuperarAvaliacao(codigoPaciente: string): Observable<AvaliacaoFisica> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.avaliacaoFisica, headers);
  }

  public recuperarMetas(codigoPaciente: string): Observable<PlanoMetas> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.metas, headers);
  }

  public salvarMetas(codigoPaciente: string, metas: PlanoMetas): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.salvarMetas, metas, headers);
  }

  public recuperarPlano(codigoPaciente: string): Observable<PlanoAlimentar> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.get(environment.api.endpoints.planoAlimentar, headers);
  }

  public salvarPlano(codigoPaciente: string, planoAlimentar: PlanoAlimentar): Observable<ResponseSucesso> {
    let headers = new HttpHeaders().set(
      'Content-type', 'application/json'
    );
    headers = headers.append('codigo-paciente', codigoPaciente);
    return this.rest.post(environment.api.endpoints.planoAlimentar, planoAlimentar, headers);
  }
}
