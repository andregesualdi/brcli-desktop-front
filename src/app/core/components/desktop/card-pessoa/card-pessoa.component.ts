import { Component, Input } from '@angular/core';
import { Paciente } from '../../../shared/models/paciente.model';

@Component({
  selector: 'app-card-pessoa',
  templateUrl: './card-pessoa.component.html',
  styleUrls: ['./card-pessoa.component.scss']
})
export class CardPessoaComponent {
  @Input()
  public paciente: Paciente = new Paciente;
}
