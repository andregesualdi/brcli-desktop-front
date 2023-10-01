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
    // colocar router quando ter página pronta
  }

  private recuperarPacientes(): void {
    this.dados.recuperarPacientes('1200A').subscribe({
      next: (data: Paciente[]) => {
        if (!data || data.length === 0) {
          this.semPacientes = true;
        } else {
          this.pacientes = data;
        }
        this.loading = false;
      },
      error: () => {
        this.erro = true;
        this.loading = false;
      }
    });
  }
}
