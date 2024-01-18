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
Cypress.Commands.add("Rahulshettyurls", ()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

})
Cypress.Commands.add("Googleurl", ()=>{
    cy.visit('https://www.google.com');

})

Cypress.Commands.add("TableTestMethod", (position, names, city)=>{
        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{
            const course_name = $el.text()
            if (course_name.includes(position)) {
            
                //next() --- find city of Receptionist
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const pr = price.text()
                    expect(pr).to.eq(city)
                })

                //prev() --- who is Receptionist
                cy.get('tr td:nth-child(2)').eq(index).prev().then((name)=>{
                    const Rec_name = name.text()
                    expect(Rec_name).to.equal(names)
                })
            }
        });
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