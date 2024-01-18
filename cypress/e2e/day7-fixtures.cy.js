

describe('test fixtures', () => {
    let dt=""
    before(()=>{
        cy.fixture("qa21").then((data)=>{
            dt = data
        })
       
    })

  

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPracticesss/'); 
    });

    afterEach(() => {
       
    });
  
    it('LoginTestcase with correct username and password', () => {
       
    });

    it('LoginTestcase with incorrect username', () => {
      
    });

    it('LoginTestcase with incorrect password', () => {
        
    });
   
    it('Test case 1', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#name').type(dt.name)

    });

    
      // execute after all testcase or it is completed
      after(() => {
       
      });
})