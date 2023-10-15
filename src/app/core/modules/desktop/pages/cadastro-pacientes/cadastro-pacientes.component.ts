import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from 'src/app/core/services/dados.service';
import { CadastrarPaciente } from 'src/app/core/shared/models/cadastrar-paciente.model';

@Component({
  selector: 'app-cadastro-pacientes',
  templateUrl: './cadastro-pacientes.component.html',
  styleUrls: ['./cadastro-pacientes.component.scss']
})
export class CadastroPacientesComponent {
  public cadastro: FormGroup = new FormGroup({
    'nome': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(128) ]),
    'telefone': new FormControl(null, [ Validators.required, Validators.pattern('') ] ),
    'email': new FormControl(null, [ Validators.email, Validators.required ] ),
    'dataNasc': new FormControl(null, [ Validators.required ]),
    'altura': new FormControl(null, [ Validators.required, Validators.minLength(2), Validators.maxLength(3) ]),
    'peso': new FormControl(null, [ Validators.required, Validators.minLength(2), Validators.maxLength(3) ]),
  });
  public loading: boolean = false;

  constructor(
    private dados: DadosService,
    private router: Router
  ) { }

  public cadastrar(): void {
    const cadastro = {
      nome: this.cadastro.value.nome,
      telefone: this.cadastro.value.telefone as string,
      email: this.cadastro.value.email as string,
      dataNascimento: this.cadastro.value.dataNasc as string,
      altura: this.cadastro.value.altura as number,
      peso: this.cadastro.value.peso as number
    };
    this.loading = true;
    this.dados.cadastrarPaciente(cadastro as unknown as CadastrarPaciente).subscribe({
      next: (data) => {
        if (data.sucess) {
          this.loading = false;
          alert('Cliente cadastrado');
          this.router.navigate(['pacientes']);
        } else {
          alert('Erro ao cadastrar paciente')
          this.loading = false;
          this.router.navigate(['pacientes']);
        }
      },
      error: () => {
        alert('Erro ao cadastrar paciente');
        this.loading = false;
        this.router.navigate(['pacientes']);
      }
    });
  }

  public voltar(): void {
    this.router.navigate(['pacientes']);
  }
}
