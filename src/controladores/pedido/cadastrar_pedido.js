const knex = require('../../configuracoes/conexao_bancoDados');
const { enviarEmail } = require('../../utils/enviar_email');
const { calcularValorPedido, inserirPedidoNoBanco, inserirProdutosDoPedido } = require('../../utils/funcoes_controlador_cadastrar_pedido/funcoes');

const cadastrarPedido = async (req, res) => {
    const { cliente_id, observacao, pedido_produtos } = req.body;
    const { nome, email } = req.cliente;

    try {
        const produtosNaCesta = await knex('produtos').whereIn('id', pedido_produtos.map(item => item.produto_id));
        const { valorPedido, resposta } = await calcularValorPedido(pedido_produtos, produtosNaCesta);
        const pedidoId = await inserirPedidoNoBanco(cliente_id, valorPedido, observacao);
        const { id } = pedidoId[0];
        await inserirProdutosDoPedido(resposta, id);
        await enviarEmail(nome, email);

        return res.status(201).json({ mensagem: 'Pedido cadastrado.' });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    cadastrarPedido
};