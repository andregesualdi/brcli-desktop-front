export const environment = {
    production: false,
    verbose: true,

    api: {
        context: '/brcli-gateway/brcli-bff-desktop',
        endpoints: {
            agenda: '/agenda',
            avaliacaoFisica: '/avaliacao-fisica',
            cadastroPaciente: '/cadastro-paciente',
            dadosPaciente: '/dados-paciente',
            editarPaciente: '/editar-paciente',
            perfilPaciente: '/perfil-paciente',
            gerarCodigo: '/gerar-codigo',
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