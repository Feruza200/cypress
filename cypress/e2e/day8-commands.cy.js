describe('Test Commands', () => {
   let datas=""
    before(()=>{
        cy.fixture("qa21").then((data)=>{
            datas = data
        })
    })
    
    it('Test Table using commands', () => {
        cy.Rahulshettyurls()
        cy.TableTestMethod(datas.position, "Ivory", "Chennai")
    });


    it("Google url testcase", ()=>{
        cy.Googleurl()
    })

})