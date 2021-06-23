/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão de realizar login
    clicarBotaoRealizarLogin() {
        cy.get(loginElements.btnLogin()).click()
    }

    // Informa username
    informarEmail(username) {
        cy.get(loginElements.inputUsername()).type(username)
    }

    // Informa senha no input da senha
    informarSenha(password) {
        cy.get(loginElements.inputPassword()).type(password)
    }
}

export default LoginPage;