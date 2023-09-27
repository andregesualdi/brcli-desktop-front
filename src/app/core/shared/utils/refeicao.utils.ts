export class RefeicaoUtils {
    public static getChaveRefeicao(tipo: string | undefined): string {
        switch (tipo) {
          case 'cafe':
            return 'PLANO_ALIMENTAR.CAFE';
            break;
          case 'lanchemanha':
            return 'PLANO_ALIMENTAR.LANCHEMANHA';
            break;
          case 'almoco':
            return 'PLANO_ALIMENTAR.ALMOCO';
            break;
          case 'lanchetarde':
            return 'PLANO_ALIMENTAR.LANCHETARDE';
            break;
          case 'jantar':
            return 'PLANO_ALIMENTAR.JANTAR';
            break;
          case 'ceia':
            return 'PLANO_ALIMENTAR.CEIA';
            break;
          default:
            return '';
            break;
        }
      }
}