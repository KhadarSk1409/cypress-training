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

        it ('Login using incorrect credentials', {tags: ['uiRegression']}, ()=> {

        cy.invalidLogin(Cypress.env('username1'),Cypress.env('password')) //This test case will fail

    })
})