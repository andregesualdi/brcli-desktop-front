import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../../shared/models/paciente.model';

@Component({
  selector: 'app-card-pessoa',
  templateUrl: './card-pessoa.component.html',
  styleUrls: ['./card-pessoa.component.scss']
})
export class CardPessoaComponent {
  @Input()
  public paciente: Paciente = new Paciente;

  @Input()
  public mini: boolean = false;

  @Output()
  public botaoClicado: EventEmitter<any> = new EventEmitter<any>();

  public clique(event: any): void {
    this.botaoClicado.emit(this.paciente.codigoPaciente);
  }
}
