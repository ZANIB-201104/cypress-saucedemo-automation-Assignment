class ProductPage {

    productName() {
        return cy.get('.inventory_details_name');
    }

    productDescription() {
        return cy.get('.inventory_details_desc');
    }

    productPrice() {
        return cy.get('.inventory_details_price');
    }

    addToCartButton() {
        return cy.get('[data-test^="add-to-cart"]');
    }

    backToProductsButton() {
        return cy.get('[data-test="back-to-products"]');
    }
}

export default ProductPage;