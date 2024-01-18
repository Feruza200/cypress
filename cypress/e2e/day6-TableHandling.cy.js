describe('Test Table', () => {
   
    
    it('Table', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{

            const course_name = $el.text()
            if (course_name.includes("Receptionist")) {
                //expect(course_name).to.equal("QA Expert Course :Software Testing + Bugzilla + SQL + Agile")

                //next() --- find city of Receptionist
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const pr = price.text()
                    expect(pr).to.eq('Chennai')
                })

                //prev() --- who is Receptionist
                cy.get('tr td:nth-child(2)').eq(index).prev().then((name)=>{
                    const Rec_name = name.text()
                    expect(Rec_name).to.equal("Ivory")
                })
            }
        });
      
    });


    it.only('Test Mouse over', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get("div .mouse-hover-content").invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')


        cy.contains('Reload').click({force:true})
        cy.url().should("include","https://rahulshettyacademy.com/AutomationPractice/")

    });
})