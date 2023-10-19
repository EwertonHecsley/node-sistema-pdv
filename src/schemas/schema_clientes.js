const joi = require('joi');

const schemaClientes = joi.object({
    nome: joi.string().required().regex(/^[A-Za-z\s]+$/).messages({
        'any.required': 'Campo nome é obrigatorio',
        'string.empty': 'Campo nome não pode ser vazio',
        'string.base': 'Formato de nome invalido',
        'string.pattern.base': 'Formato de nome inválido. Use apenas letras e espaços.',
    }),
    email: joi.string().required().email().messages({
        'any.required': 'Campo email é obrigatorio.',
        'string.empty': 'Campo email não pode ser vazio.',
        'string.base': 'Formato de email invalido.',
        'string.email': 'Formato de email inválido. Deve ser um endereço de email válido.',
    }),
    cpf: joi.string().required().pattern(/^\d{11}$/).messages({
        'any.required': 'Campo CPF obrigatorio.',
        'string.empty': 'Campo CPF deve ser preenchido.',
        'string.pattern.base': 'CPF inválido.'
    }),
    cep: joi.string().required().pattern(/^\d{8}$/).messages({
        'any.required': 'Campo CEP é obrigatorio.',
        'string.pattern.base': 'CEP Inválido.',
        'string.empty': 'Campo CEP deve ser preenchido.',
    })
});

module.exports = schemaClientes;