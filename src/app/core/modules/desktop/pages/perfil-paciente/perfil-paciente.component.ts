import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from 'src/app/core/services/dados.service';
import { DadosPaciente } from 'src/app/core/shared/models/dados-paciente.model';
import { PerfilPaciente } from 'src/app/core/shared/models/perfil-paciente.model';

@Component({
  selector: 'app-perfil-paciente',
  templateUrl: './perfil-paciente.component.html',
  styleUrls: ['./perfil-paciente.component.scss']
})
export class PerfilPacienteComponent implements OnInit {
  public loading: boolean = false;
  public perfilPaciente: PerfilPaciente = new PerfilPaciente;
  public idPaciente: string = '';
  public erro: boolean = false;
  public gerandoCodigo: boolean = false;

  constructor(
    private router: Router,
    private dados: DadosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.recuperarPerfil();
  }

  public editar(): void {
    const dados: DadosPaciente = {
      codigoPaciente: this.idPaciente,
      nome: this.perfilPaciente.nome,
      telefone: this.perfilPaciente.telefone,
      email: this.perfilPaciente.email,
      dataNascimento: this.perfilPaciente.dataNascimento,
      altura: this.perfilPaciente.altura,
      peso: this.perfilPaciente.peso
    };
    this.router.navigate(['editar-paciente', this.idPaciente], {
      state: {
        data: dados
      }
    });
  }

  public gerarCodigo(): void {
    this.gerandoCodigo = true;
    this.dados.gerarCodigo('1200A', this.idPaciente).subscribe({
      next: (data) => {
        this.perfilPaciente.codigoAcesso = data.codigo;
        this.gerandoCodigo = false;
      },
      error: () => {
        alert('Erro ao gerar código de acesso');
        this.gerandoCodigo = false;
      }
    })
  }

  public redirecionar(caminho: string): void {
    this.router.navigate([caminho, this.idPaciente], {
      state: {
        perfil: {
          codigoPaciente: this.idPaciente,
          imagem: this.perfilPaciente.imagem,
          nome: this.perfilPaciente.nome
        }
      }
    });
  }

  public voltar(): void {
    this.router.navigate(['pacientes']);
  }

  private recuperarPerfil(): void {
    this.loading = true;
    this.dados.recuperarPerfil('1200A', this.idPaciente).subscribe({
      next: (data: PerfilPaciente) => {
        this.perfilPaciente = data;
        this.loading = false;
      },
      error: () => {
        this.erro = true;
        this.loading = false;
      }
    });
  }
  
}
