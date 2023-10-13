import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { DadosService } from '../../../../services/dados.service';
import { AvaliacaoFisica } from '../../../../shared/models/avaliacao-fisica.model';
import { Paciente } from '../../../../shared/models/paciente.model';
import { ArquivoUtils } from '../../../../shared/utils/arquivo.utils';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent implements OnInit {
  public loading: boolean = false;
  public idPaciente: string = '';
  public paciente: Paciente = new Paciente;
  public arquivo: string = '';
  public nomeArquivo: string = '';
  public semAvaliacao: boolean = true;
  public avaliacao: AvaliacaoFisica = new AvaliacaoFisica;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private dados: DadosService
  ) { }
  
  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.paciente = history.state.perfil;
    this.recuperarAvaliacao();
  }

  public onFileChange(event: any): void {
    const files = event.target.files as FileList;
    const tiposPermitidos = ['application/pdf'];

    if (files.length > 0) {
      if (!tiposPermitidos.includes(files[0].type)) {
        alert('Tipo de arquivo não permitido');
      } else if (Math.round(files[0].size / 1024) > 2048) {
        alert('Arquivo muito grande');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => {
          this.arquivo = String(reader.result).split(',')[1];
          this.nomeArquivo = files[0].name;
        }
      }
    }
  }

  public resetInput(): void {
    const input = document.getElementById('avaliacao-arquivo') as HTMLInputElement;
    if(input){
      input.value = "";
    }
  }

  public voltar(): void {
    this.router.navigate(['paciente', this.idPaciente]);
  }

  public baixar(): void {
    FileSaver.saveAs(ArquivoUtils.gerarBlob(String(this.avaliacao.arquivo), 'application/pdf'));
  }

  public salvarAvaliacao(): void {
    this.loading = true;
    let avaliacao: AvaliacaoFisica = {
      arquivo: this.arquivo,
      nomeArquivo: this.nomeArquivo
    };
    this.dados.salvarAvaliacao('1200A', avaliacao, this.idPaciente).subscribe({
      next: (data) => {
        if (data.sucess) {
          alert('Enviado com sucesso');
          this.resetInput();
          this.recuperarAvaliacao();
        } else {
          alert('Erro ao enviar');
          this.resetInput();
          this.loading = false;
        }
      },
      error: () => {
        alert('Erro ao enviar');
        this.resetInput();
        this.loading = false;
      }
    })
  }

  private recuperarAvaliacao(): void {
    this.loading = true;
    this.dados.recuperarAvaliacao('1200A', this.idPaciente).subscribe({
      next: (data) => {
        if (data.arquivo && data.arquivo !== '') {
          this.avaliacao = data;
          this.semAvaliacao = false;
          this.loading = false;
        } else {
          this.semAvaliacao = true;
          this.loading = false;
        }
      },
      error: () => {
        alert('Erro ao abrir a página, tente novamente mais tarde');
        this.loading = false;
        this.voltar();
      }
    })
  }
}
