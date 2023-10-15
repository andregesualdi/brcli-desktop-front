import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from 'src/app/core/shared/models/paciente.model';
import { PlanoAlimentar } from 'src/app/core/shared/models/plano-alimentar.model';
import { RefeicaoUtils } from 'src/app/core/shared/utils/refeicao.utils';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.scss']
})
export class RefeicaoComponent {
  public loading: boolean = true;
  public idPaciente: string = '';
  public idRefeicao!: number;
  public planoAlimentar: PlanoAlimentar = new PlanoAlimentar;
  public refeicoesAlteradas: Array<boolean> = new Array<boolean>;
  public paciente: Paciente = new Paciente;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.idRefeicao = Number(this.route.snapshot.params['refeicao']);
    this.paciente = history.state.perfil;
    this.planoAlimentar = history.state.plano;
    this.refeicoesAlteradas = history.state.refeicoesAlteradas;
    this.loading = false;
  }

  get getTipoRefeicao(): string {
    return RefeicaoUtils.getChaveRefeicao(this.idRefeicao);
  }

  public voltar(): void {
    this.router.navigate(['plano-alimentar', this.idPaciente], {
      state: {
        origem: 'refeicao',
        perfil: this.paciente,
        plano: this.planoAlimentar,
        alteracoes: this.refeicoesAlteradas
      }
    });
  }

  public adicionar(): void {
    this.planoAlimentar.refeicoes![this.idRefeicao].alimentos!.push({
      descricao: '',
      quantidade: '',
      medida: 'g'
    });
  }

  public remover(indice: any): void {
    this.planoAlimentar.refeicoes![this.idRefeicao].alimentos!.splice(indice, 1);
  }

  public salvar(): void {
    this.refeicoesAlteradas[this.idRefeicao] = true;
    this.router.navigate(['plano-alimentar', this.idPaciente], {
      state: {
        origem: 'refeicao',
        perfil: this.paciente,
        plano: this.planoAlimentar,
        alteracoes: this.refeicoesAlteradas
      }
    });
  }
}
