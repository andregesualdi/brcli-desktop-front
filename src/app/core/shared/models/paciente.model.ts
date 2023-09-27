import { Nutricionista } from "./nutricionista.model";

export class Paciente {
    public nome: string | undefined;
    public nomeAcesso: string | undefined;
    public email: string | undefined;
    public altura: string | undefined;
    public imagem: string | undefined;
    public nutricionista: Nutricionista | undefined;
}
