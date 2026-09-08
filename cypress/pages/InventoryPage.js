class InventoryPage {

    pageTitle() {
        return cy.get('.title');
    }

    productItems() {
        return cy.get('.inventory_item');
    }

    productNames() {
        return cy.get('.inventory_item_name');
    }

    productPrices() {
        return cy.get('.inventory_item_price');
    }

    cartLink() {
        return cy.get('.shopping_cart_link');
    }

    openProduct(productName) {
        cy.contains('.inventory_item_name', productName).click();
    }

    addProductToCart(productName) {
        cy.contains('.inventory_item', productName)
            .find('button')
            .click();
    }
}

export default InventoryPage;