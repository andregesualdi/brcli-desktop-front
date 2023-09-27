import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoService } from '../../../../services/acesso.service';
import { Login } from '../../../../shared/models/login.model';
import { RequisicaoLogin } from '../../../../shared/models/requisicao-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public desabilitado: boolean = true;
  public login: string = '';
  public senha: string = '';
  public nutricionista: boolean = false;
  public usuarioInvalido: boolean = false;
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

  public recuperarSenha(event: any): void {
    this.senha = event;
    this.validarCampos();
  }

  public avisoUsuarioInvalido(): void {
    setTimeout(() => {
      this.usuarioInvalido = false;
    }, 3000);
  }

  public acessarApp(): void {
    this.loading = true;
    const req: RequisicaoLogin = {
      usuario: this.login,
      senha: this.senha
    };

    this.acessoService.logar(req).subscribe(
      {
        next: (data: Login) => {
        if (data.authorized) {
          if (data.userType === "paciente") {
            window.sessionStorage.setItem('usuario', this.login); // Melhorar este ponto, acesso perigoso, analisar outras formas
            this.loading = false;
            this.router.navigate(['plano-alimentar']);
          } else if (data.userType === "nutricionista") {
            this.nutricionista = true;
          } else {
            this.usuarioInvalido = true;
            this.avisoUsuarioInvalido();
          }
          this.loading = false;
        } else {
          this.usuarioInvalido = true;
          this.loading = false;
          this.avisoUsuarioInvalido();
        }
        },
        error: () => {
          this.erro = true;
          this.loading = false;
        }
      }
    );
  }

  public redirecionarLogin(): void {
    window.location.reload();
  }

  public esqueceuSenha(): void {
    this.router.navigate(['esqueci-senha']);
  }

  public primeiroAcesso(): void {
    this.router.navigate(['primeiro-acesso']);
  }

  private validarCampos(): void {
    if (this.senha && this.senha !== '' && this.login && this.login !== '') {
      this.desabilitado = false;
    } else {
      this.desabilitado = true;
    }
  }
}
