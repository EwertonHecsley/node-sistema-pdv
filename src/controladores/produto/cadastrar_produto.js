const { uploadImagem } = require('../../configuracoes/conexao_aws');
const knex = require('../../configuracoes/conexao_bancoDados');
const { reaisParaCentavos } = require('../../utils/funcoes_extras');

const cadastrarProduto = async (req, res) => {
    const {
        descricao,
        quantidade_estoque,
        valor,
        categoria_id,
    } = req.body;

    try {
        const valorEmCentavos = reaisParaCentavos(valor);

        let produto = await knex('produtos')
            .insert({ descricao, quantidade_estoque, valor: valorEmCentavos, categoria_id })
            .returning('*');

        if (req.file) {
            const { originalname, buffer, mimetype } = req.file;
            const { id } = produto[0];

            const imagem = await uploadImagem(`produtos/${id}/${originalname}`, buffer, mimetype);

            produto = await knex('produtos').update({ produto_imagem: imagem.url }).where({ id }).returning('*');
        };

        return res.status(201).json({ mensagem: 'Produto cadastrado com sucesso!', produto });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    cadastrarProduto
};