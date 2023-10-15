export const environment = {
    production: true,
    verbose: true,
    apiUrl: "https://brcli-gateway-production.up.railway.app",
    api: {
        context: '/brcli-gateway',
        endpoints: {
            agenda: '/api/desktop/agenda',
            agendar: '/api/desktop/agendamento',
            consulta: '/api/desktop/agendamento',
            avaliacaoFisica: '/api/desktop/avaliacao',
            registrarAvaliacaoFisica: '/api/desktop/avaliacao',
            cadastroPaciente: '/api/desktop/paciente',
            editarPaciente: '/api/desktop/paciente',
            perfilPaciente: '/api/desktop/paciente',
            gerarCodigo: '/api/desktop/codigo-acesso',
            login: '/login',
            metas: '/api/desktop/metas',
            pacientes: '/api/desktop/pacientes',
            planoAlimentar: '/api/desktop/plano-alimentar',
            recuperarSenha: '/recuperar-senha',
            salvarMetas: '/api/desktop/metas'
        }
    }
}