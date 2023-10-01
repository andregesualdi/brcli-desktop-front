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
  public paciente: DadosPaciente = {
    nome: 'Karla Cruz',
    telefone: '12926322222',
    email: 'karla@cruz.com.br',
    dataNascimento: '1992-04-01',
    altura: 163,
    peso: 60,
    codigoPaciente: '120A775522'
  };

  constructor(
    private dados: DadosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cadastro.controls['nome'].setValue(this.paciente.nome);
    this.cadastro.controls['telefone'].setValue(this.paciente.telefone);
    this.cadastro.controls['email'].setValue(this.paciente.email);
    this.cadastro.controls['dataNasc'].setValue(this.paciente.dataNascimento);
    this.cadastro.controls['altura'].setValue(this.paciente.altura);
    this.cadastro.controls['peso'].setValue(this.paciente.peso);
  }

  public salvarDados(): void {
    const cadastro = {
      nome: this.cadastro.value.nome,
      telefone: this.cadastro.value.telefone as string,
      email: this.cadastro.value.email as string,
      dataNasc: this.cadastro.value.dataNasc as string,
      altura: this.cadastro.value.altura as number,
      peso: this.cadastro.value.peso as number,
      codigoPaciente: this.paciente.codigoPaciente
    };
    this.loading = true;
    this.dados.editarPaciente('1200A', cadastro as unknown as DadosPaciente).subscribe({
      next: (data: ResponseSucesso) => {
        if (data.sucesso) {
          alert('Paciente editado com sucesso');
          this.router.navigate(['pacientes']);
        } else {
          alert('Erro ao editar paciente');
          this.router.navigate(['pacientes']);
        }
        this.loading = false;
      },
      error: () => {
        alert('Erro ao editar paciente');
        this.loading = false;
        this.router.navigate(['pacientes']);
      }
    })
  }
}
