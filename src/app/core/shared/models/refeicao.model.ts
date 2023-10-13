import { Alimento } from "./alimento.model";

export class Refeicao {
    public tipo: string | undefined;
    public id: number | undefined;
    public horario: string | undefined;
    public alimentos: Array<Alimento> | undefined;
}
