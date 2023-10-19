const knex = require('../../configuracoes/conexao_bancoDados');
const { buscarImagem, excluirImagem } = require('../../configuracoes/conexao_aws');

const deletarProdutoId = async (req, res) => {
    const { id } = req.params;

    try {
        await knex('produtos').del().where({ id });

        const imagem_bucket = await buscarImagem(id);

        if (imagem_bucket.length > 0) {
            await excluirImagem(imagem_bucket[0].Key);
        }

        return res.status(200).json({ mensagem: 'Produto Deletado com sucesso.' });

    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    deletarProdutoId
}