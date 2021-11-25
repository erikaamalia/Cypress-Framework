describe('Test_Case_Login_Description_saucedemo | 1941720015 - Erika Amalia', () => {
    it('Test_Case_1', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
    })
    it('Test_Case_2', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("problem_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click()
        

    })
    it('Test_Case_3', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("locked_out_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
    })
    it('Test_Case_4', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("performance_glitch_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
    })
    it('Test_Case_5', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type("admin");
        cy.get('#password').type("admin");
        cy.get('#login-button').click();
    })

}) 
