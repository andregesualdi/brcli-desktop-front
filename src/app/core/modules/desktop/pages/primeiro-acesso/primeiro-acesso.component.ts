import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AcessoService } from '../../../../services/acesso.service';
import { RequisicaoCodigo } from '../../../../shared/models/requisicao-codigo.model';
import { CodigoValidado } from '../../../../shared/models/codigo-validado.model';
import { CadastrarPaciente } from '../../../../shared/models/cadastrar-paciente.model';
import { Cadastro } from '../../../../shared/models/cadastro.model';

@Component({
  selector: 'app-primeiro-acesso',
  templateUrl: './primeiro-acesso.component.html',
  styleUrls: ['./primeiro-acesso.component.scss']
})
export class PrimeiroAcessoComponent {
  public codigoValido: boolean = false;
  public erroCodigoInvalido: boolean = false;
  public erro: boolean = false;
  public loading: boolean = false;
  public validarDesabilitado: boolean = true;
  public cadastrarDesabilitado: boolean = true;
  public codigoCadastro: string = '';
  public loginUsuario: string = '';
  public senhaUsuario: string = '';

  constructor(
    private router: Router,
    private acessoService: AcessoService
  ) { }

  public recuperarLogin(event: any): void {
    this.loginUsuario = event;
    this.validarCamposCadastro();
  }

  public recuperarSenha(event: any): void {
    this.senhaUsuario = event;
    this.validarCamposCadastro();
  }

  public recuperarCodigo(event: any): void {
    this.codigoCadastro = event;
    this.validarCampoCodigo();
  }

  public validarCodigo(): void {
    this.loading = true;
    const req: RequisicaoCodigo = {
      codigoCadastro: this.codigoCadastro
    };
    this.acessoService.validarCodigo(req).subscribe(
      {
        next: (data: CodigoValidado) => {
          if (data.valido) {
            this.codigoValido = true;
          } else {
            this.codigoValido = false;
            this.erroCodigoInvalido = true;
          }
          this.loading = false;
        },
        error: () => {
          this.erro = true;
          this.loading = false;
        }
      }
    );
  }

  public cadastrar(): void {
    this.loading = true;
    const req: CadastrarPaciente = {
      codigo: this.codigoCadastro,
      usuario: this.loginUsuario,
      senha: this.senhaUsuario
    };
    this.acessoService.cadastrar(req).subscribe(
      {
        next: (data: Cadastro) => {
          if (data.valido) {
            this.loading = false;
            this.router.navigate(['']);
            alert('Cadastro realizado');
          } else {
            this.loading = false;
            this.erro = true;
          }
        },
        error: () => {
          this.loading = false;
          this.erro = true;
        }
      }
    );
  }

  public voltar(): void {
    this.router.navigate(['']);
  }
  
  private validarCampoCodigo(): void {
    if (this.codigoCadastro && this.codigoCadastro !== '') {
      this.validarDesabilitado = false;
    } else {
      this.validarDesabilitado = true;
    }
  }

  private validarCamposCadastro(): void {
    if (this.loginUsuario && this.loginUsuario !== ''
      && this.senhaUsuario && this.senhaUsuario !== '') {
      this.cadastrarDesabilitado = false;
    } else {
      this.cadastrarDesabilitado = true;
    }
  }
}
