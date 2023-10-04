export class RefeicaoUtils {
    public static getChaveRefeicao(tipo: number | undefined): string {
        switch (tipo) {
          case 0:
            return 'PLANO_ALIMENTAR.CAFE';
            break;
          case 1:
            return 'PLANO_ALIMENTAR.LANCHEMANHA';
            break;
          case 2:
            return 'PLANO_ALIMENTAR.ALMOCO';
            break;
          case 3:
            return 'PLANO_ALIMENTAR.LANCHETARDE';
            break;
          case 4:
            return 'PLANO_ALIMENTAR.JANTAR';
            break;
          case 5:
            return 'PLANO_ALIMENTAR.CEIA';
            break;
          default:
            return '';
            break;
        }
      }
}