export class HoraUtils {
    public gerarDia(horas: number): Date {
        const data = new Date();
        data.setTime(data.getTime() + horas * 60 * 60 * 1000);
        return data;
    }

    public static formatarData(date: Date): string {
        const timezoneDate = date.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).split(',')[0].split('/');
        return `${timezoneDate[2]}-${timezoneDate[1]}-${timezoneDate[0]}`;
    }
}
