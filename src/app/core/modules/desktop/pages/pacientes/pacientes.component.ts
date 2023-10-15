import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { Paciente } from '../../../../shared/models/paciente.model';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent implements OnInit {
  public pacientes: Array<Paciente> = new Array<Paciente>();
  public search: string = '';
  public erro: boolean = false;
  public semPacientes: boolean = false;
  public loading: boolean = false;

  constructor(
    private dados: DadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.recuperarPacientes();
  }

  public buscar(event: any) {
    this.search = event;
  }

  public cadastrarPacientes(): void {
    this.router.navigate(['cadastrar-paciente']);
  }

  public redirecionarPaciente(event: any): void {
    this.router.navigate(['paciente', event]);
  }

  private recuperarPacientes(): void {
    this.dados.recuperarPacientes().subscribe({
      next: (data: Paciente[]) => {
        this.pacientes = data;
        this.loading = false;
      },
      error: (error) => {
        if (error.error.code === "BRCLI404") {
          this.semPacientes = true;
        } else {
          this.erro = true;
        }
        this.loading = false;
      }
    });
  }
}
