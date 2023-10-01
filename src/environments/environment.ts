export const environment = {
    production: true,
    verbose: true,

    api: {
        context: '/brcli-gateway/brcli-bff-desktop',
        endpoints: {
            agenda: '/agenda',
            avaliacaoFisica: '/avaliacao-fisica',
            cadastroPaciente: '/cadastro-paciente',
            editarPaciente: '/editar-paciente',
            dadosPaciente: '/dados-paciente',
            login: '/login',
            metas: '/metas',
            pacientes: '/pacientes',
            planoAlimentar: '/plano-alimentar',
            primeiroAcesso: '/primeiro-acesso',
            recuperarSenha: '/recuperar-senha',
            salvarMetas: '/salvar-metas'
        }
    }
}