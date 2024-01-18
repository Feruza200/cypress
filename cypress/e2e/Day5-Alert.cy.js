describe("handling Alerts", ()=>{

    it("handling alert" , ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //click alert button
        cy.get("#alertbtn").click()
        cy.wait(2)
        cy.on("window:alert",(str)=>{
            expect(str).to.be.equal("Hello , share this practice page and share your knowledge")
        })

        //check confirm alert
        cy.get("#confirmbtn").click()
        cy.on("window:confirm", (constr)=>{
            expect(constr).to.equal("Hello , Are you sure you want to confirm?")
        })

    })



})