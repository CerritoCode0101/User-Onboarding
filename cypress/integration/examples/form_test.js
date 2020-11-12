describe("this is our first test!", ()=>{
    it("Should Return true",()=>{
       expect(true).to.be.equal(true); 
    })
})

describe('Testing our form inputs', ()=>{
    beforeEach(function(){
        cy.visit('http://localhost:3000');
    });

it('Input Name into the Name Input',()=> {
//arrange-- get the Element
//act-- Mimic User Interaction
//assert-- Test/Verify


cy.get(':nth-child(1) > input')
.type('Casey Cerrito')
.should('have.value', 'Casey Cerrito')
  
cy.get('.checkboxLabel > input').check().should('be.checked')

cy.get(':nth-child(3) > input').type('CaseyCerrito@gmail.com')
.should('have.value','CaseyCerrito@gmail.com')

cy.get(':nth-child(5) > input').type('Abracadabra')
.should('have.value',"Abracadabra")

cy.get('form').submit()


})
});

