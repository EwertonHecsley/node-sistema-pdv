const joi = require('joi');

const schemaPedidos = joi.object({
    cliente_id: joi.number().required().messages({
        'any.required': 'Campo Cliente_id obrigatório',
        'number.base': 'Deve ser passado um ID válido para cliente'
    }),
    observacao: joi.string().messages({
        'string.empty': 'Obeservação não pode esta vazio'
    }),
    pedido_produtos: joi.array()
        .min(1).
        items(
            joi.object({
                produto_id: joi.number().required().messages({
                    'any.required': 'Campo produto_id obrigatório',
                    'number.base': 'Deve ser passado um ID válido para produto'
                }),
                quantidade_produto: joi.number().min(1).required().messages({
                    'any.required': 'Campo quantidade_produto obrigatório',
                    'number.base': 'Campo quantidade deve ser preenchida corretamente',
                    'number.min': 'Quantidade inválida'
                })
            })
        ).required().messages({
            'any.required': 'O campo pedido_produtos é obrigatório',
            'array.min': 'Pedido vazio, deve selecionar ao menos um item válido'
        })
});

module.exports = schemaPedidos;