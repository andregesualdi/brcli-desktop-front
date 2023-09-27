import { Component, Input } from '@angular/core';
import { Alimento } from '../../../shared/models/alimento.model';

@Component({
  selector: 'app-tabela-alimentos',
  templateUrl: './tabela-alimentos.component.html',
  styleUrls: ['./tabela-alimentos.component.scss']
})
export class TabelaAlimentosComponent {
  @Input()
  public alimentos: Array<Alimento> | undefined;
}
