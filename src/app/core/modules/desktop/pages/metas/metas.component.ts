import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DadosService } from '../../../../services/dados.service';
import { Meta } from '../../../../shared/models/meta.model';
import { Paciente } from '../../../../shared/models/paciente.model';

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
      descricao: '',
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
    this.dados.salvarMetas('1200A', this.idPaciente, this.metas).subscribe({
      next: (data) => {
        if (data.sucesso) {
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
    this.dados.recuperarMetas('1200A', this.idPaciente).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.metas = data;
        }
        this.loading = false;
      }, error: () => {
        alert('Não foi possível carregar as metas, tente novamente mais tarde.')
        this.loading = false;
        this.voltar();
      }
    })
  }
}
