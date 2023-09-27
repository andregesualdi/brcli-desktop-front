import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-rodape',
  templateUrl: './menu-rodape.component.html',
  styleUrls: ['./menu-rodape.component.scss']
})
export class MenuRodapeComponent implements OnInit {
  @Input()
  public selecao: string = '';

  public planoSelecionado: boolean = false;
  public metasSelecionado: boolean = false;
  public avaliacaoSelecionado: boolean = false;
  public perfilSelecionado: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.navegar(this.selecao)
  }

  public navegar(tela: string): void {
    switch (tela) {
      case 'plano':
        this.planoSelecionado = true;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = false;
        this.router.navigate(['plano-alimentar']);
        break;
      case 'metas':
        this.planoSelecionado = false;
        this.metasSelecionado = true;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = false;
        this.router.navigate(['metas']);
        break;
      case 'avaliacao':
        this.planoSelecionado = false;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = true;
        this.perfilSelecionado = false;
        this.router.navigate(['avaliacao-fisica']);
        break;
      case 'perfil':
        this.planoSelecionado = false;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = true;
        this.router.navigate(['perfil']);
        break;
      case 'refeicao':
        this.planoSelecionado = true;
        this.metasSelecionado = false;
        this.avaliacaoSelecionado = false;
        this.perfilSelecionado = false;
        break;
    }
  }
}
