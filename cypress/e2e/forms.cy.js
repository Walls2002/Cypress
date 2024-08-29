describe('Test Form',()=>{

beforeEach(()=>{
    cy.visit('/forms')
})

it("test form subscribe",()=>{
    cy.get('[data-test="test-input"]').as("inputEmail")

    cy.get('@inputEmail').type('Wallygaynor@gmail.com')

    cy.get('[data-test="submit-btn"]').click()
    cy.contains(/Successfully subbed/)

    cy.wait(500);

    cy.get('@inputEmail').clear().type('Wallygaynor')
    cy.get('[data-test="submit-btn"]').click()
    cy.contains(/invalid/i)

})
})