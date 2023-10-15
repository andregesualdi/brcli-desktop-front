import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoService } from 'src/app/core/services/acesso.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Input()
  public selecao: string = '';

  public agendaSelecionada: boolean = false;
  public pacientesSelecionado: boolean = false;

  constructor(
    private router: Router,
    private acessoService: AcessoService
  ) { }

  ngOnInit(): void {
    this.navegar(this.selecao)
  }

  public navegar(tela: string): void {
    switch (tela) {
      case 'agenda':
        this.agendaSelecionada = true;
        this.pacientesSelecionado = false;
        this.router.navigate(['meus-agendamentos']);
        break;
      case 'pacientes':
        this.agendaSelecionada = false;
        this.pacientesSelecionado = true;
        this.router.navigate(['pacientes']);
        break;
      case 'cadastro':
        this.agendaSelecionada = false;
        this.pacientesSelecionado = true;
        break;
    }
  }

  public sair(): void {
    this.acessoService.sair();
  }
}
