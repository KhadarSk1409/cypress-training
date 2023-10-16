import empdata from '../../../fixtures/empdata.json'
import utils from '../utilities/utils';
class AddEmployee
{

   empFirstName ="input[placeholder='First Name']"
   empMiddleName ="input[placeholder='Middle Name']"
   empLastName ="input[placeholder='Last Name']"
   clickAddBtn="button[class='oxd-button oxd-button--medium oxd-button--secondary']"
   addEmpTitle=".orangehrm-card-container>h6"
   createLoginDetailsToggle = ".oxd-switch-input"
   empPassword="(//input[@type='password'])[1]"
   empCnfrmPassword="(//input[@type='password'])[2]"
   saveBtnClick="button[type='submit']"
   saveSuccessMsg=".oxd-toast-content"
   profileDrpDown=".oxd-userdropdown-name"
   
  

  
   setEmpFirstName()
   {
      cy.get(this.empFirstName).type(empdata.firstname);
   }

   setEmpMiddleName()
   {
      cy.get(this.empMiddleName).type(empdata.middlename);
   }

   setEmpLastName()
   {
      cy.get(this.empLastName).type(empdata.lastname);
   }

   setPassword()
   {
      cy.xpath(this.empPassword).type(empdata.password);
   }

   setCnfrmPassword()
   {
      cy.xpath(this.empCnfrmPassword).type(empdata.password);
   }

   addEmployee()
   {
   
      const randomUserName = utils.generateString(5);
      cy.scrollTo('top');
      cy.get(this.clickAddBtn).click();
      cy.wait(5000);
      cy.get(this.addEmpTitle).should('have.text','Add Employee');
      this.setEmpFirstName();
      this.setEmpMiddleName();
      this.setEmpLastName();
      cy.wait(1000);
      cy.get(this.createLoginDetailsToggle).click();
      cy.contains('Username').parent().siblings().type(randomUserName);
      this.setPassword();
      this.setCnfrmPassword();
      utils.elementClick(this.saveBtnClick);
      cy.get(this.saveSuccessMsg).should('be.visible').and('contain.text', 'Success');
   }

}
export default new AddEmployee();
