export class HoraUtils {
    public gerarDia(horas: number): Date {
        const data = new Date();
        data.setTime(data.getTime() + horas * 60 * 60 * 1000);
        return data;
    }
}
