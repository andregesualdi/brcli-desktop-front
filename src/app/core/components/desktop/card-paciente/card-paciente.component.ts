import { Component, Input } from '@angular/core';
import { Agendamento } from '../../../shared/models/agendamento.model';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.scss']
})
export class CardPacienteComponent {
  @Input()
  public agendamento: Agendamento = new Agendamento;
}
