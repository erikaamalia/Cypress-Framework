//  <reference types='cypress'/>
describe('Checkout', () => {
    // beforeEach(() => {
    //     cy.visit('/')
    // })
    it('checkout scenario - valid', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Tasya')
        cy.get('#last-name').type('Rachmah Sakinah')
        cy.get('#postal-code').type('67316')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    it('checkout scenario - invalid last name', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Tasya')
        cy.get('#last-name').type('Sakinah')
        cy.get('#postal-code').type('67316')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    it('checkout scenario - invalid Zip/Postal Code', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Tasya')
        cy.get('#last-name').type('Rachmah Sakinah')
        cy.get('#postal-code').type('67316')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    it('checkout scenario - invalid first name & last name', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Tasya')
        cy.get('#last-name').type('Rachmah Sakinah')
        cy.get('#postal-code').type('67316')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    it('checkout scenario - invalid first name, last name, & Zip/Postal Code', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Tasya')
        cy.get('#last-name').type('Rachmah Sakinah')
        cy.get('#postal-code').type('67316')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
})