import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { DadosPaciente } from '../../../../shared/models/dados-paciente.model';
import { ResponseSucesso } from '../../../../shared/models/response-sucesso.model';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.scss']
})
export class EditarPacienteComponent implements OnInit {
  public cadastro: FormGroup = new FormGroup({
    'nome': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(128) ]),
    'telefone': new FormControl(null, [ Validators.required, Validators.pattern('') ] ),
    'email': new FormControl(null, [ Validators.email, Validators.required ] ),
    'dataNasc': new FormControl(null, [ Validators.required ]),
    'altura': new FormControl(null, [ Validators.required, Validators.minLength(2), Validators.maxLength(3) ]),
    'peso': new FormControl(null, [ Validators.required, Validators.minLength(2), Validators.maxLength(3) ]),
  });
  public loading: boolean = false;
  public paciente: DadosPaciente = new DadosPaciente();

  constructor(
    private dados: DadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.paciente = history.state.data;
    this.cadastro.controls['nome'].setValue(this.paciente.nome);
    this.cadastro.controls['telefone'].setValue(this.paciente.telefone);
    this.cadastro.controls['email'].setValue(this.paciente.email);
    this.cadastro.controls['dataNasc'].setValue(this.paciente.dataNascimento);
    this.cadastro.controls['altura'].setValue(this.paciente.altura);
    this.cadastro.controls['peso'].setValue(this.paciente.peso);
  }

  public voltar(): void {
    this.router.navigate(['paciente', this.paciente.codigoPaciente]);
  }

  public salvarDados(): void {
    const cadastro = {
      nome: this.cadastro.value.nome,
      telefone: this.cadastro.value.telefone as string,
      email: this.cadastro.value.email as string,
      dataNascimento: this.cadastro.value.dataNasc as string,
      altura: this.cadastro.value.altura as number,
      peso: this.cadastro.value.peso as number,
      codigoPaciente: this.paciente.codigoPaciente
    };
    this.loading = true;
    this.dados.editarPaciente(cadastro as unknown as DadosPaciente).subscribe({
      next: (data: ResponseSucesso) => {
        if (data.success) {
          alert('Paciente editado com sucesso');
          this.router.navigate(['paciente', this.paciente.codigoPaciente]);
        } else {
          alert('Erro ao editar paciente');
          this.router.navigate(['paciente', this.paciente.codigoPaciente]);
        }
        this.loading = false;
      },
      error: () => {
        alert('Erro ao editar paciente');
        this.loading = false;
        this.router.navigate(['paciente', this.paciente.codigoPaciente]);
      }
    })
  }
}
