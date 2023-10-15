import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../../../shared/models/agenda.model';
import { HoraUtils } from '../../../../shared/utils/hora.utils';
import { DadosService } from '../../../../services/dados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-agendamentos',
  templateUrl: './meus-agendamentos.component.html',
  styleUrls: ['./meus-agendamentos.component.scss']
})
export class MeusAgendamentosComponent implements OnInit {
  public agendaHoje: Agenda | undefined;
  public agendaAmanha: Agenda | undefined;
  public agendaDepoisAmanha: Agenda | undefined;
  public horaUtils: HoraUtils = new HoraUtils;
  public loadingHoje: boolean = false;
  public loadingAmanha: boolean = false;
  public loadingDepoisAmanha: boolean = false;
  public erroHoje: boolean = false;
  public erroAmanha: boolean = false;
  public erroAposAmanha: boolean = false;
  public semAgendamentoHoje: boolean = false;
  public semAgendamentoAmanha: boolean = false;
  public semAgendamentoDepoisAmanha: boolean = false;

  constructor(
    private dados: DadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadingHoje = true;
    this.loadingAmanha = true;
    this.loadingDepoisAmanha = true;
    this.recuperarAgendas();
  }

  public async recuperarAgendas(): Promise<void> {
    this.dados.recuperarAgenda(this.horaUtils.gerarDia(0)).subscribe({
      next: (data: Agenda) => {
        this.agendaHoje = data;
        this.loadingHoje = false;
      },
      error: (error) => {
        console.log(error);
        if (error.error.code === "BRCLI404") {
          this.semAgendamentoHoje = true;
        } else {
          this.erroHoje = true;
        }
        this.loadingHoje = false;
      }
    });

    this.dados.recuperarAgenda(this.horaUtils.gerarDia(24)).subscribe({
      next: (data: Agenda) => {
        this.agendaAmanha = data;
        this.loadingAmanha = false;
      },
      error: (error) => {
        if (error.error.code === "BRCLI404") {
          this.semAgendamentoAmanha = true;
        } else {
          this.erroAmanha = true;
        }
        this.loadingAmanha = false;
      }
    });

    this.dados.recuperarAgenda(this.horaUtils.gerarDia(48)).subscribe({
      next: (data: Agenda) => {
        this.agendaDepoisAmanha = data;
        this.loadingDepoisAmanha = false;
      },
      error: (error) => {
        if (error.error.code === "BRCLI404") {
          this.semAgendamentoDepoisAmanha = true;
        } else {
          this.erroAposAmanha = true;
        }
        this.loadingDepoisAmanha = false;
      }
    });
  }

  public redirecionarPaciente(event: any): void {
    this.router.navigate(['paciente', event]);
  }
}
