import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { Meta } from '../../../../shared/models/meta.model';
import { Paciente } from '../../../../shared/models/paciente.model';
import { PlanoMetas } from '../../../../shared/models/plano-metas.model';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements OnInit {

  public loading: boolean = false;
  public idPaciente: string = '';
  public paciente: Paciente = new Paciente;
  public metas: Array<Meta> = new Array<Meta>;
  public planoMetas: PlanoMetas = new PlanoMetas;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dados: DadosService
  ) { }

  ngOnInit(): void {
    this.idPaciente = this.route.snapshot.params['id'];
    this.paciente = history.state.perfil;
    this.recuperarMetas();
  }

  public voltar(): void {
    this.router.navigate(['paciente', this.idPaciente]);
  }

  public adicionarMeta(): void {
    this.metas.push({
      descricaoMeta: '',
      atingida: false
    });
  }

  public remover(indice: any): void {
    this.metas.splice(indice, 1);
  }

  public maximoMetas(): boolean {
    if (this.metas.length === 4) {
      return true;
    }
    return false;
  }

  public salvar(): void {
    this.loading = true;
    this.dados.salvarMetas(this.idPaciente, this.planoMetas).subscribe({
      next: (data) => {
        if (data.success) {
          alert('Metas salvas');
          this.metas = new Array<Meta>;
          this.recuperarMetas();
        } else {
          alert('Erro ao salvar metas');
          this.loading = false;
        }
      }, error: () => {
        alert('Erro ao salvar metas');
        this.loading = false;
      }
    })
  }

  private recuperarMetas(): void {
    this.loading = true;
    this.dados.recuperarMetas(this.idPaciente).subscribe({
      next: (data) => {
        if (data) {
          this.planoMetas = data;
          this.metas = this.planoMetas.metas!;
        }
        this.loading = false;
      }, error: (error) => {
        if (error.error.code === "BRCLI404") {
          this.planoMetas = {
            id: undefined,
            metas: []
          };
          this.metas = this.planoMetas.metas!;
          this.loading = false;
        } else {
          alert('Não foi possível carregar as metas, tente novamente mais tarde.')
          this.voltar();
        }
      }
    })
  }
}
