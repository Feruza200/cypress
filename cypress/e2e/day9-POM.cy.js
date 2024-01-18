import RegistrationPage from "./pageObject/registrationPage";


describe('test how to build POM', () => {
    let dt
    before(() => {
       cy.fixture("data").then((data)=>{
            dt = data
       })
    });
    it('POM', () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        // object create, call
        const rp = new RegistrationPage()
        rp.getName(dt.name)
        rp.getEmail(dt.email)
        rp.getPassword(dt.password)

    });
})