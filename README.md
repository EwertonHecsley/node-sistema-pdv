<div align="center"> 
 
 # Sistema de PDV - Frente de caixa
</div>

![api](https://github.com/EwertonHecsley/node-sistema-pdv/assets/114318366/8ef366e3-0c78-4735-83d2-9394aad9fdb6)

<div align="center"> 
 
## Projeto Backend em Node.js com Express
</div>

Este é um dos meus projetos mais recentes e representa uma **API RESTful** desenvolvida em Node.js, usando o framework **Express**.

Aqui estão alguns detalhes essenciais sobre este projeto:

* **Tecnologias Utilizadas:** Node.js, Express, JWT, Bcrypt

* **Descrição:** Uma API RESTful que permite realizar ações específicas, como criar, ler, atualizar e excluir recursos.

* **Funcionalidades Principais:** autenticação de usuários, CRUD para produtos e pedidos.

<div align="center"> 
 
## Requisitos do Projeto
</div>

**Banco de Dados:**

* Crie um banco de dados PostgreSQL chamado pdv.

* Inclua um arquivo SQL com os comandos de criação das tabelas e inserção das categorias necessárias.
 

**Requisitos Obrigatórios:**


* A API deve acessar o banco de dados para persistir e manipular dados.* 

* O campo **id** nas tabelas deve ser auto incremento, chave primária e não deve ser editável.

* Valores monetários devem ser representados em centavos.

* A API deve responder com códigos de status adequados.

<div align="center"> 
 
## Endpoints
</div>

**A API inclui os seguintes endpoints:**

**`GET /categoria`:** Lista todas as categorias.

**`POST /usuario`:** Cadastra um novo usuário.

**`POST /login`:** Permite que o usuário cadastrado faça login e recebe um token de autenticação.

**`GET /usuario`:** Exibe o perfil do usuário logado.

**`PUT /usuario`:** Permite ao usuário logado editar seu perfil.

**`POST /produto`:** Cadastra um novo produto.

**`PUT /produto/:id`:** Permite ao usuário logado editar informações de um produto.

**`GET /produto`:** Lista todos os produtos ou filtra por categoria.

**`GET /produto/:id`:** Exibe detalhes de um produto.

**`DELETE /produto/:id`:** Exclui um produto.

**`POST /cliente`:** Cadastra um novo cliente.

**`PUT /cliente/:id`:** Permite ao usuário logado editar informações de um cliente.

**`GET /cliente`:** Lista todos os clientes.

**`GET /cliente/:id`:** Exibe detalhes de um cliente.

**`POST /pedido`:** Cadastra um novo pedido, incluindo produtos vinculados.

<div align="center"> 
 
## Instruções de Uso:
</div>

* Clone este repositório.

* Execute **`npm install`** para instalar as dependências.

* Configure suas variáveis de ambiente, seguindo o modelo do  **`.env.example`**

* Execute **`npm start`** para iniciar o servidor.


<div align="center"> 
 
## Exemplo de Requisição:
</div>

**Requisição:**

**`POST /pedido`**

```
// Corpo da requisição para cadastro de pedido (body)
{
    "cliente_id": 1,
    "observacao": "Em caso de ausência recomendo deixar com algum vizinho",
    "pedido_produtos": [
        {
            "produto_id": 1,
            "quantidade_produto": 10
        },
        {
            "produto_id": 2,
            "quantidade_produto": 20
        }
    ]
}
```

**Resposta:**

```
{
    "mensagem":"Pedido cadastrado com sucesso."
}
```
<div align="center"> 
 
## Contato
</div>

* E-mail: ewerton.martinscomercial@gmail.com
 
* LinkedIn: https://www.linkedin.com/in/ewerton-hecsley-8a613992/?trk

<div align="center"> 
 
## Como Contribuir
</div>

Se você gostou do meu projeto e gostaria de contribuir ou dar feedback, fique à vontade para entrar em contato comigo ou abrir uma "issue" no repositório. Estou sempre aberto a melhorias e colaborações!


