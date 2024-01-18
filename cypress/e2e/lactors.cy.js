describe("Lactors", ()=>{

    // Locators using id, name, class
    it("Locators", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")   // to open url
        //cy.get(".inputs").type("Abebe Kebede")
        cy.get("input[name='enter-name']")
          .type("Abebe Kebede")
          .should("have.value", "Abebe Kebede")
          .and("have.attr",'name','enter-name')

        // Explcit assertion
        expect(true).to.be.false
        //assert.isAbove(6,1,"6 is greater than 1")
       


    })
})
