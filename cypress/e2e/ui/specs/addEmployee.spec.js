import utils from "../utilities/utils";
import addEmployee from "../pageObjects/addEmployee"
import loginPage from "../pageObjects/loginPage";

describe('Add Employee Suite', () => 
{
    before ('Clear Cookies', () =>{

        // runs once before all tests in the block
        cy.clearCookies();
    })

    beforeEach ('Login and Verify Dashboard', () =>{
        cy.login(Cypress.env('username'),Cypress.env('password'));
    })

    it ('Add Employee', {tags: ['uiRegression']}, ()=> {

    utils.clickLeftPaneOptions("PIM");
    cy.wait(3000);
    addEmployee.addEmployee();
    utils.elementClick(addEmployee.profileDrpDown);
    cy.contains('Logout').should('be.visible').click();
    utils.isTextEquals(loginPage.loginHdrText,'Login');

    })

        
})