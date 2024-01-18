describe("handling Dropdown", ()=>{

    it("Static Dropdown",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('option3').should('have.value', 'option3')


        
    })

    it.only("Dynamic dropdown",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // dynamic dropdown
        cy.get("#autocomplete").type("ne")
        cy.get(".ui-menu-item div").each(($el, index, $list)=>{
            const country = $el.text()
            if(country === 'Ukraine')
                $el.click()
        })

        cy.get("#autocomplete").should('have.value', 'Ukraine')

    })


})