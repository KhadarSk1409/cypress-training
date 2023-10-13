class utils {

    navigateTo(url){
       cy.visit(url)
       
    }
    isTextEquals(selector,text){
      return this.getSelector(selector).should('have.text',text)
    }
    
        isContentVisible(message) {
          return cy.contains(message).should('be.visible');
        }
      
        isDataTestElementDisabled(key) {
          this.getByTestId(key).should('be.disabled');
        }
      
        clickByText(text) {
          this.getByText(text).click();
        }
       
        submit() {
          cy.get('button[type="submit"]').click();
        }


      
        clearField(selector) {
          cy.get(selector).clear();
        }
      
        typeTextInElement(selector, data) {
          cy.get(selector).type(data);
        }
    
        elementClick(element)
        {
            cy.get(element).click();
        }
      
        shouldIncludeInUrl(url) {
          return cy.url().should('include', url);
        }
      
        scrollElementToBottom(key) {
          return cy.get(`[data-testid="${key}"]`).children().scrollTo('bottom');
        }
      
        getByTestId(key) {
          return cy.get(`[data-testid="${key}"]`);
        }
      
        checkTextByTitle(text) {
          return cy.title(text).should('eq', text);
        }
      
        getByDataContent(key) {
          return cy.get(`[data-content="${key}"]`);
        }
      
        checkIfContentExists(text) {
          this.getByDataContent(text).should('be.visible');
        }
      
        updateTextInElement(key, data) {
          cy.get(`[data-testid="${key}"]`).clear();
          cy.get(`[data-testid="${key}"]`).type(data);
        }
      
        getSelector(selector) {
          return cy.get(selector);
        }
    
        
      
        getH1(text) {
          cy.get('h1').should('contain', text);
        }
      
        getById(key) {
          return cy.get(`span[id="${key}"]`);
        }
      
        getByText(text) {
          return cy.contains(text);
        }
      
        clickToggleButton() {
          cy.get('[data-testid=toggle-button]').click({ multiple: true });
        }
      
        getElementValueFromTable(text) {
          return cy.get('table').contains('td', text);
        }
      
        getValueOfIndexFromTable(index, text) {
          return cy.get('tbody>tr').eq(index).should('contain', text);
        }
      
        getValueOfHeaderIndexFromTable(index, text) {
          return cy.get('thead>tr>th').eq(index).should('contain', text);
        }
      
        isErrorMessageVisible(message) {
          cy.contains(message).should('be.visible');
        }
      
        getByInputId(key) {
          return cy.get(`input[id="${key}"]`).check();
        }
    
        generateEmail(){
    
          const emailLength = 5;
                let result = '';
                const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
                const charactersLength = characters.length;
    
                for (let i = 0; i < emailLength; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
    
                return `${result}@testautomation.com`;
    
        }
        
        generateString(length){
          let result = '';
          const characters = 'abcdefghijklmnopqrstuvwxyz';
          const charactersLength = characters.length;
    
          for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
      
          return result;
        }
    
        generateMobileNumber(){
          const min = 1000000000; // Minimum 10-digit number
                const max = 9999999999; // Maximum 10-digit number
            
                return Math.floor(Math.random() * (max - min + 1) + min);
        }
    
        generateBackdate(){
          const start = new Date(2020, 0, 1); // Start date
          const end = new Date(); // End date (current date)
          const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
          const randomDate=new Date(randomTime).toISOString().split('T')[0];
          const parts = randomDate.split('-');
          const formattedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;
          return formattedDate
        }

        clickLeftPaneOptions(option)
{
   cy.contains('span',option).click();
} 
    
        
      }

      export default new utils();
      