import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(array: any[], textoDeBusca: string): any[] {
    console.log('Array: ', array);
    console.log('texto: ', textoDeBusca);
    if (!array) {
      return [];
    }
    if (!textoDeBusca) {
      return array;
    }
    textoDeBusca = textoDeBusca.toLocaleLowerCase();

    return array.filter(it => {
      return it.nome.toLocaleLowerCase().includes(textoDeBusca);
    });
  }
}
