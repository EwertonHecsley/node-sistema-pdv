const knex = require('../../configuracoes/conexao_bancoDados');
const { buscarImagem, excluirImagem, uploadImagem } = require('../../configuracoes/conexao_aws');

const atualizarProdutoNoBanco = async (id, descricao, quantidade_estoque, valorEmCentavos, categoria_id) => {
    return await knex('produtos')
        .update({ descricao, quantidade_estoque, valor: valorEmCentavos, categoria_id })
        .where({ id })
        .returning('*');
};

const atualizarImagemDoProduto = async (id, file) => {
    const imagem = await buscarImagem(id);

    if (imagem.length > 0) {
        await excluirImagem(imagem[0].Key);
    }

    const { originalname, buffer, mimetype } = file;
    const imagem_bucket = await uploadImagem(`produtos/${id}/${originalname}`, buffer, mimetype);

    await knex('produtos').update({ produto_imagem: imagem_bucket.url }).where({ id });
};

module.exports = {
    atualizarProdutoNoBanco,
    atualizarImagemDoProduto
};