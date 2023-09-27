import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  @Input()
  public texto: string = '';

  @Input()
  public tipoBotao: string = 'primario-desktop';

  @Input()
  public desabilitado: boolean = false;

  @Output()
  public botaoClicado: EventEmitter<any> = new EventEmitter();

  public clique(event: Event): void {
    this.botaoClicado.emit(event);
  }
}
