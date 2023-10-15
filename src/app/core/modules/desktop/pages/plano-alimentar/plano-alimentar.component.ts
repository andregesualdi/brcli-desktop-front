import { Component } from '@angular/core';
import { Paciente } from '../../../../shared/models/paciente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { PlanoAlimentar } from '../../../../shared/models/plano-alimentar.model';

@Component({
  selector: 'app-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent {
  public loading: boolean = false;
  public idPaciente: string = '';
  public paciente: Paciente = new Paciente;
  public planoAlimentar: PlanoAlimentar = new PlanoAlimentar;
  public refeicaoAlterada: Array<boolean> = [
    false,
    false,
    false,
    false,
    false,
    false
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dados: DadosService
  ) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.paciente = history.state.perfil;
    this.validarOrigem();
  }

  public voltar(): void {
    if (this.planoAlterado()) {
      if (confirm('Você deseja sair do plano? As alterações não foram salvas e serão perdidas.')) {
        this.router.navigate(['paciente', this.idPaciente]);
      }
    } else {
      this.router.navigate(['paciente', this.idPaciente]);
    }
  }

  public planoAlterado(): boolean {
    return this.refeicaoAlterada.includes(true);
  }

  public redirecionarRefeicao(idRefeicao: number): void {
    this.router.navigate([
      'plano-alimentar', this.idPaciente, idRefeicao
    ], {
      state: {
        plano: this.planoAlimentar,
        refeicoesAlteradas: this.refeicaoAlterada,
        perfil: this.paciente
      }
    })
  }

  public recuperarPlano(): void {
    this.dados.recuperarPlano(this.idPaciente).subscribe({
      next: (data) => {
        this.planoAlimentar = data;
        this.loading = false;
      },
      error: () => {
        alert('Erro ao recuperar o plano alimentar do paciente');
        this.loading = false;
        this.voltar();
      }
    })
  }

  public salvarPlano(): void {
    this.loading = true;
    this.dados.salvarPlano(this.idPaciente, this.planoAlimentar).subscribe({
      next: (data) => {
        if (data.success) {
          alert('Plano novo salvo com sucesso');
          this.refeicaoAlterada = [false,false,false,false,false,false];
          this.recuperarPlano();
        } else {
          alert('Erro ao salvar plano');
          this.loading = false;
        }
      },
      error: () => {
        alert('Erro ao salvar plano');
        this.loading = false;
      }
    });
  }

  private validarOrigem(): void {
    this.loading = true;
    if (history.state.origem && history.state.origem === 'refeicao') {
      this.planoAlimentar = history.state.plano;
      this.refeicaoAlterada = history.state.alteracoes;
      this.loading = false;
    } else {
      this.recuperarPlano();
    }
  }
}
