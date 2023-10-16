import loginPage from "../pageObjects/loginPage";

describe('Demo Application Login Test Suite', () => 
{
    before ('Clear Cookies', () =>{

        // runs once before all tests in the block
        cy.clearCookies();
    })

    it ('Login using correct credentials', {tags: ['uiRegression']}, ()=> {

        cy.login(Cypress.env('username'),Cypress.env('password'))

    })

        it.only ('Login using incorrect credentials', {tags: ['uiRegression']}, ()=> {

        cy.login(Cypress.env('username1'),Cypress.env('password'))

    })
})