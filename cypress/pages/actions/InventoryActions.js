/// <reference types="Cypress" />

import InventoryElements from '../elements/InventoryElements'
const inventoryElements = new InventoryElements

class InventoryPage {
    // Clica no menu do usuário
    clicarMenuUsuario() {
        cy.get(inventoryElements.menuUser()).click();
    }

    // Verifica se o link de Logout está visísivel
    checkLogoutLnkExist() {
        cy.get(inventoryElements.linkLougout()).should('be.visible');
    }
}

export default InventoryPage;