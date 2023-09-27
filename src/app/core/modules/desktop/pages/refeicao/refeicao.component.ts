import { Component, OnInit } from '@angular/core';
import { Refeicao } from '../../../../shared/models/refeicao.model';
import { RefeicaoUtils } from '../../../../shared/utils/refeicao.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-refeicao',
  templateUrl: './refeicao.component.html',
  styleUrls: ['./refeicao.component.scss']
})
export class RefeicaoComponent implements OnInit {
  public refeicao: Refeicao = new Refeicao;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refeicao = history.state.alimentos;
  }

  get getTipoRefeicao(): string {
    return RefeicaoUtils.getChaveRefeicao(this.refeicao.tipo);
  }

  public voltar(): void {
    this.router.navigate(['plano-alimentar']);
  }
}
