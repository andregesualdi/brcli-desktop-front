export const environment = {
    production: false,
    verbose: true,

    api: {
        context: '/brcli-gateway/brcli-bff-desktop',
        endpoints: {
            alterarImagem: '/alterar-imagem',
            avaliacaoFisica: '/avaliacao-fisica',
            cadastroPaciente: '/cadastro-paciente',
            dadosPaciente: '/dados-paciente',
            login: '/login',
            metas: '/metas',
            planoAlimentar: '/plano-alimentar',
            primeiroAcesso: '/primeiro-acesso',
            recuperarSenha: '/recuperar-senha',
            salvarMetas: '/salvar-metas'
        }
    }
}