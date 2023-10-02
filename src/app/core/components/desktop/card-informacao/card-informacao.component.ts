import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RefeicaoUtils } from '../../../shared/utils/refeicao.utils';

@Component({
  selector: 'app-card-informacao',
  templateUrl: './card-informacao.component.html',
  styleUrls: ['./card-informacao.component.scss']
})
export class CardInformacaoComponent {

  @Input()
  public texto: string = '';

  @Input()
  public imagem: string | undefined;

  @Output()
  public cliqueBotao: EventEmitter<any> = new EventEmitter();

  public navegar(event: Event): void {
    this.cliqueBotao.emit('clicou');
  }
}
