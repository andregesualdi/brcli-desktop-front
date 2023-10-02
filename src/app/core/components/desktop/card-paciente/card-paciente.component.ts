import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agendamento } from '../../../shared/models/agendamento.model';

@Component({
  selector: 'app-card-paciente',
  templateUrl: './card-paciente.component.html',
  styleUrls: ['./card-paciente.component.scss']
})
export class CardPacienteComponent {
  @Input()
  public agendamento: Agendamento = new Agendamento;

  @Output()
  public botaoClicado: EventEmitter<any> = new EventEmitter<any>();

  public clique(event: any): void {
    this.botaoClicado.emit(this.agendamento.codigoPaciente);
  }
}
