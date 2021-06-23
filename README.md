# Automation Frontend Tests - Cypress Cucumber

 O objetivo deste projeto é fornecer um bom ponto de partida para quem procura usar Cypress e Cucumber utilizando o padrão PageObject.

**Referências**
- [Cypress](https://www.cypress.io/)
- [Cucumber](https://cucumber.io/)
- [Cypress-Cucumber-Preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)

## Setup - Windows

**Requerimentos**
- [Node.js](https://nodejs.org/en/)
- Instale o Cypress com Cucumber executando o seguinte comando na raíz da pasta do seu projeto:
```
$ npm install
```
- Download e instale [Visual Studio Code](https://code.visualstudio.com/).

### Visual Studio Code - Extension

Download e instale a extensão [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete) e [Cuke Step Definition Generato](https://marketplace.visualstudio.com/items?itemName=muralidharan92.cuke-step-definition-generator) na sua IDE para facilitar a geração de arquivos feature e steps.

## Executando Testes

**Requerimentos**
- Via terminal:
```
$ npx cypress run
```

- Via interface:
```
$ npx cypress open
```