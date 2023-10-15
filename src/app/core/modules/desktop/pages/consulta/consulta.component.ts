import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { NovoAgendamento } from '../../../../shared/models/novo-agendamento.model';
import { Paciente } from '../../../../shared/models/paciente.model';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  public loading: boolean = false;
  public idPaciente: string = '';
  public paciente: Paciente = new Paciente;
  public agendamento: FormGroup = new FormGroup({
    'data': new FormControl(null, [ Validators.required ]),
    'hora': new FormControl(null, [ Validators.required ])
  });
  public dataMinimaAgendamento: string | undefined;
  public semAgendamento: boolean = true;
  public dataAgendamento: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private dados: DadosService
  ) { }
  
  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.paciente = history.state.perfil;
    this.dataMinimaAgendamento = this.datePipe.transform(Date.now(), 'yyyy-MM-dd')?.toString();
    this.recuperarAgendamento();
  }

  public voltar(): void {
    this.router.navigate(['paciente', this.idPaciente]);
  }

  public agendar(): void {
    this.loading = true;
    let agendamento: NovoAgendamento = {
      data: this.agendamento.value.data,
      hora: this.agendamento.value.hora
    };
    this.dados.agendarConsulta(this.idPaciente, agendamento as unknown as NovoAgendamento).subscribe({
      next: (data) => {
        if (data.sucess) {
          alert('Agendamento realizado');
          this.limparAgendamento();
          this.recuperarAgendamento();
        } else {
          alert('Erro ao agendar');
          this.limparAgendamento();
          this.loading = false;
        }
      },
      error: () => {
        alert('Erro ao agendar');
        this.limparAgendamento();
        this.loading = false;
      }
    })
  }

  private recuperarAgendamento(): void {
    this.loading = true;
    this.dados.proximaConsultaPaciente(this.idPaciente).subscribe({
      next: (data) => {
        this.dataAgendamento = data.data!;
        this.loading = false;
      },
      error: (error) => {
        if (error.code === "BRCLI404") {
          this.semAgendamento = true;
        } else {
          alert('Erro ao buscar dados de agendamento');
          this.voltar();
        }
      }
    })
  }

  private limparAgendamento(): void {
    this.agendamento.controls['data'].setValue(null);
    this.agendamento.controls['hora'].setValue(null);
  }
}
