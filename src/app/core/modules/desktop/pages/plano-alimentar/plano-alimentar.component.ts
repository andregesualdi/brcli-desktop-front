import { Component, OnInit } from '@angular/core';
import { PlanoAlimentar } from '../../../../shared/models/plano-alimentar.model';
import { Router } from '@angular/router';
import { Refeicao } from '../../../../shared/models/refeicao.model';
import { DadosService } from '../../../../services/dados.service';

@Component({
  selector: 'app-plano-alimentar',
  templateUrl: './plano-alimentar.component.html',
  styleUrls: ['./plano-alimentar.component.scss']
})
export class PlanoAlimentarComponent implements OnInit {
  
  public planoAlimentar: PlanoAlimentar = new PlanoAlimentar;
  public loading: boolean = true;
  public erro: boolean = false;

  constructor(
    private router: Router,
    private dados: DadosService
  ) { }

  ngOnInit(): void {
    this.recuperarPlano();
  }

  public abrirRefeicao(refeicao: Refeicao): void {
    this.router.navigate(['plano-alimentar/refeicao', refeicao.tipo], {
      state: {
        alimentos: refeicao
      }
    });
  }

  private recuperarPlano(): void {
    const usuario: string = String(window.sessionStorage.getItem('usuario')); // Melhorar acesso, muito perigoso
    if (usuario === '' || usuario === 'null' || usuario === 'undefined') {
      this.loading = false;
      this.erro = true;
    } else {
      this.dados.recuperarPlano(usuario).subscribe(
        {
          next: (data: PlanoAlimentar) => {
            if (data) {
              this.planoAlimentar = data;
            } else {
              this.erro = true;
            }
            this.loading = false;
          },
          error: () => {
            this.loading = false;
            this.erro = true;
          }
        }
      );
    }
  }
}
