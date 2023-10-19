const { reaisParaCentavos } = require('../../utils/funcoes_extras');
const { atualizarImagemDoProduto, atualizarProdutoNoBanco } = require('../../utils/funcoes_controlador_editar_produto/funcoes');

const atualizarPruduto = async (req, res) => {
    const { id } = req.params;
    const {
        descricao,
        quantidade_estoque,
        valor,
        categoria_id
    } = req.body;

    try {
        const valorEmCentavos = reaisParaCentavos(valor);

        await atualizarProdutoNoBanco(id, descricao, quantidade_estoque, valorEmCentavos, categoria_id);

        if (req.file) {
            await atualizarImagemDoProduto(id, req.file);
        };

        return res.status(200).json({ mensagem: 'Produto atualizado com sucesso' });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = {
    atualizarPruduto
}