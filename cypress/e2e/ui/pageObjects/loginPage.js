
class LoginPage
{

    usernameTxtField = "input[placeholder='Username']";
    passwordTxtField = "input[placeholder='Password']";
    loginBtnClick = "button[type='submit']";
    dashboardTxt = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    loginHdrText=".oxd-text--h5"


setUsername(username)
{
    cy.get(this.usernameTxtField).type(username);
}

setPassword(password)
{
    cy.get(this.passwordTxtField).type(password);
}


loginClick()
{
    cy.get(this.loginBtnClick).click();
}

verifyLoginTitle()
{
    cy.get(this.dashboardTxt).should('have.text','Dashboard');
}

}

export default new LoginPage();

