import 'cypress-iframe'


describe('test iframe', () => {
   
    it('handling iframe', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        // load the frame
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href='https://courses.rahulshettyacademy.com/courses']").eq(0).click()

    });

})