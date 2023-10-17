import loginPage from '../e2e/ui/pageObjects/loginPage'

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add('login',(username,password)=>
{  
cy.visit(Cypress.env('url'))
loginPage.setUsername(username);
loginPage.setPassword(password);
loginPage.loginClick();
loginPage.verifyLoginTitle();
cy.log('************* User Logged In successfully and on Dashboard Screen *************');
})

Cypress.Commands.add('invalidLogin',(username,password)=>
{  
cy.visit(Cypress.env('url'))
loginPage.setUsername(username);
loginPage.setPassword(password);
loginPage.loginClick();
loginPage.verifyInvalidLoginErrorText();
cy.log('************* User failed to login due to invalid Credentials *************');
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>