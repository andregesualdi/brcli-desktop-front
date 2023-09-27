import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { DadosService } from '../../../../services/dados.service';
import { AvaliacaoFisica } from '../../../../shared/models/avaliacao.model';
import { ArquivoUtils } from '../../../../shared/utils/arquivo.utils';

@Component({
  selector: 'app-avaliacao-fisica',
  templateUrl: './avaliacao-fisica.component.html',
  styleUrls: ['./avaliacao-fisica.component.scss']
})
export class AvaliacaoFisicaComponent implements OnInit {
  public loading: boolean = false;
  public erro: boolean = false;
  public avaliacaoFisica: AvaliacaoFisica = new AvaliacaoFisica;

  constructor(
    private dados: DadosService
  ) { }

  ngOnInit(): void {
    this.recuperarAvaliacaoFisica()
  }

  public baixarAvaliacaoFisica(): void {
    FileSaver.saveAs(ArquivoUtils.gerarBlob(String(this.avaliacaoFisica.arquivo), 'application/pdf'));
  }

  private recuperarAvaliacaoFisica(): void {
    this.loading = true;
    const usuario = String(window.sessionStorage.getItem('usuario'));
    if (!usuario || usuario === '' || usuario === 'null' || usuario === 'undefined') {
      this.loading = false;
      this.erro = true;
    } else {
      this.dados.recuperarAvaliacao(usuario).subscribe(
        {
          next: (data: AvaliacaoFisica) => {
            if (data && data.arquivo !== '') {
              this.avaliacaoFisica = data;
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
}
