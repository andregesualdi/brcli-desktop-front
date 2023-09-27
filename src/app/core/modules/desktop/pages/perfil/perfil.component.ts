import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from '../../../../shared/models/paciente.model';
import { DadosService } from '../../../../services/dados.service';
import { ImagemSalva } from '../../../../shared/models/imagem-salva.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public arquivo: string | undefined;
  public loading: boolean = false;
  public erro: boolean = false;
  public paciente: Paciente  | undefined

  constructor(
    private router: Router,
    private dados: DadosService
  ) { }

  ngOnInit(): void {
    this.recuperarDadosPaciente();
  }

  public onFileChange(event: any): void {
    const files = event.target.files as FileList;
    const tiposPermitidos = ['image/png', 'image/jpeg', 'image/gif'];

    if (files.length > 0) {
      if (!tiposPermitidos.includes(files[0].type)) {
        alert('Tipo de arquivo não permitido');
      } else if (Math.round(files[0].size / 1024) > 2048) {
        alert('Arquivo muito grande');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          this.arquivo = String(reader.result);
          this.salvarImagem();
        }
        this.resetInput();   
      }
    }
  
  }

  public resetInput(): void {
    const input = document.getElementById('avatar-perfil') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }

  public sair(): void {
    this.router.navigate(['']);
  }

  private recuperarDadosPaciente(): void {
    this.loading = true;
    const usuario: string = String(window.sessionStorage.getItem('usuario')); // Melhorar acesso, muito perigoso
    if (usuario === '' || usuario === 'null' || usuario === 'undefined') {
      this.loading = false;
      this.erro = true;
    } else {
      this.dados.recuperarDadosPaciente(usuario).subscribe(
        {
          next: (data: Paciente) => {
            if (data) {
              this.paciente = data;
              this.arquivo = data.imagem;
            } else {
              this.erro = true;
            }
            this.loading = false;
          },
          error: () => {
            this.erro = true;
            this.loading = false;
          }
        }
      )
    }
  }

  private salvarImagem(): void {
    this.loading = true;
    this.paciente!.imagem = this.arquivo;
    this.dados.salvarImagemPaciente(this.paciente as Paciente).subscribe(
      {
        next: (data: ImagemSalva) => {
          if (data && data.imagemSalva) {
            this.loading = false;
          } else {
            this.arquivo = '';
            this.paciente!.imagem = '';
            this.loading = false
            alert('Não foi possível salvar a imagem');
          }
        },
        error: () => {
          this.arquivo = '';
          this.paciente!.imagem = '';
          this.loading = false;
          alert('Não foi possível salvar a imagem');
        }
      }
    )
  }
}
