# Learning Checklist Chatbot

## Descrição

Criação automática de listas de estudo do Github, com principais funcionalidades:

1. Iniciar conversa com bot, recuperar contato e salvar usuário no mongo;
2. Listar checklists cadastrados;
3. Cadastrar nova url com lista de estudo do Github. Ex.: https://github.com/llSourcell/learn_math_fast
4. Crawler para separar links da lista em uma checklist e salvar no mongo;
5. Marcar item da checklist como concluído;
6. Perguntar qual próximo item da checklist.


## Instalação

```bash
$ npm install
```

## Executar o sistema

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Licença

  [MIT licensed](LICENSE).
