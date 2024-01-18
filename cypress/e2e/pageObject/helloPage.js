
class RegistrationPage {

    getName(name){
        return cy.get(':nth-child(1) > .form-control').type(name)  // return locator of name input
    }

    getEmail(emails){
        return cy.get(':nth-child(2) > .form-control').type(emails) // return locator of email input
    }

    getPassword(passwords){
        return cy.get('#exampleInputPassword1').type(passwords) // return password locator
    }
   
}
export default RegistrationPage