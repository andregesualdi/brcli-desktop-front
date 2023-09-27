import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoService } from '../../../../services/acesso.service';
import { EmailEnviado } from '../../../../shared/models/email-enviado.model';
import { RecuperarSenha } from '../../../../shared/models/recuperar-senha.model';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.component.html',
  styleUrls: ['./esqueci-senha.component.scss']
})
export class EsqueciSenhaComponent {

  public desabilitado: boolean = true;
  public login: string = '';
  public emailEnviado: boolean = false;
  public erro: boolean = false;
  public loading: boolean = false;

  constructor(
    private router: Router,
    private acessoService: AcessoService
  ) { }

  public recuperarLogin(event: any): void {
    this.login = event;
    this.validarCampos();
  }

  public redirecionarLogin(): void {
    this.router.navigate(['']);
  }

  public recuperarSenha(): void {
    this.loading = true;
    const req: RecuperarSenha = {
      usuario: this.login
    };
    this.acessoService.recuperarSenha(req).subscribe(
      {
        next: (data: EmailEnviado) => {
          if (data.enviado) {
            this.emailEnviado = true;
          } else {
            this.emailEnviado = false;
            this.erro = true;
          }
          this.loading = false;
        },
        error: () => {
          this.loading = false;
          this.emailEnviado = false;
          this.erro = true;
        }
      }
    )
  }

  private validarCampos(): void {
    if (this.login && this.login !== '') {
      this.desabilitado = false;
    } else {
      this.desabilitado = true;
    }
  }

}
