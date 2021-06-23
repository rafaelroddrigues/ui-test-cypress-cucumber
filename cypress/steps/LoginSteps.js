/* global Given, Then, When */

import LoginPage from '../pages/actions/LoginActions'
import InventoryPage from '../pages/actions/InventoryActions'
const loginPage = new LoginPage
const inventoryPage = new InventoryPage

Given("que acesso o site", () => {
	loginPage.acessarSite();
});

When("informo as seguintes credenciais", (datatable) => {
	datatable.hashes().forEach((element) => {
        loginPage.informarEmail(element.username);
        loginPage.informarSenha(element.password);
        });
});

When("me autentico no sistema", () => {
	loginPage.clicarBotaoRealizarLogin();
});

And("o menu do usuário está visível", () => {
    inventoryPage.clicarMenuUsuario();
});

Then("o usuário aparece logado", () => {
	inventoryPage.checkLogoutLnkExist();
});
