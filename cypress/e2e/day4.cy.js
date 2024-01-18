describe("each, find, eq", ()=>{

    it("each function", ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        cy.get('.products')  // parent 
          .find(".product")  // find is used to get descendent element
          .should("have.length", 4)  //element  x = ['']

        cy.get('.products').find('.product').eq(1).contains("ADD TO CART").click()


        // each loop

        cy.get('.products').find('.product').each(($el, index, $list)=>{

            const productName = $el.find('.product-name').text() // text is used to grap/fetch text from webelement
            if(productName.includes("Cauliflower")){
                $el.find('button').click()
            }
        })

    })


    it.only("checkbox", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1')
          .check()
          .should('be.checked')
          .and('have.value','option1')

        cy.get('#checkBoxOption1').uncheck()

        cy.get('input[type="checkbox"]').should('have.length', 3)
        cy.get('input[type="checkbox"]').check(['option1', 'option3', 'option2'])

        //Handling DropDown

        //Static dropdown
        cy.get('#dropdown-class-example').select('option2').should('have.value', 'option2')



    })
})