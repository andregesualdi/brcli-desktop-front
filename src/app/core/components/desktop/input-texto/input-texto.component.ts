import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-texto',
  templateUrl: './input-texto.component.html',
  styleUrls: ['./input-texto.component.scss']
})
export class InputTextoComponent {
  @Input()
  public placeholder: string = '';

  @Input()
  public tipo: string = 'text';

  @Output()
  public valorDigitado: EventEmitter<string> = new EventEmitter();

  public recuperarValor(event: any): void {
    this.valorDigitado.emit(event.target.value);
  }
}
