const knex = require('../../configuracoes/conexao_bancoDados');

const calcularValorPedido = async (pedido_produtos, produtosNaCesta) => {
    let valorPedido = 0;
    const resposta = [];

    for (let cestaProduto of pedido_produtos) {
        const produto = produtosNaCesta.find(p => p.id === cestaProduto.produto_id);
        if (produto) {
            valorPedido += cestaProduto.quantidade_produto * produto.valor;
            resposta.push({
                produto_id: produto.id,
                quantidade_produto: cestaProduto.quantidade_produto,
                valor_produto: produto.valor
            });
        };
    };

    return { valorPedido, resposta };
};

const inserirPedidoNoBanco = async (cliente_id, valor_total, observacao) => {
    return await knex('pedidos').insert({ cliente_id, valor_total, observacao }).returning('id');
};

const inserirProdutosDoPedido = async (resposta, pedido_id) => {
    for (let index of resposta) {
        await knex('pedido_produtos').insert({ pedido_id, ...index });
        await knex('produtos').where({ id: index.produto_id }).decrement('quantidade_estoque', index.quantidade_produto);
    };
};

module.exports = {
    calcularValorPedido,
    inserirPedidoNoBanco,
    inserirProdutosDoPedido
};