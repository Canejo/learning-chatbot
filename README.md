# Learning Checklist Chatbot

## Description

Criação automática de lstas de estudo do Github, como principais funcionalidades:

1. Iniciar conversa com bot, recuperar contato e salvar usuário no mongo;
2. Listar checklists cadastrados;
3. Cadastrar nova url com lista de estudo do Github. Ex.: https://github.com/llSourcell/learn_math_fast
4. Crawler para separar links da lista em uma checklist e salvar no mongo;
5. Marcar item da checklist como concluído;
6. Perguntar qual próximo item da checklist.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

  [MIT licensed](LICENSE).
