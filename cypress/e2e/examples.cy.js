describe("Test Example",()=>{

    beforeEach(()=>{
        cy.visit("/examples")
    })

    it("multi-page testing",()=>{

        cy.get('[data-test="dropdown-list"]')
        .find('[data-test^="data-btn1"]').click()

        cy.wait(500)

        cy.visit("/forms")
        cy.get('[data-test="test-input"]').as("inputEmail")
        cy.get('@inputEmail').type('Wallygaynor@gmail.com')
        cy.get('[data-test="submit-btn"]').click()
        cy.contains(/Successfully subbed/)
    
        cy.wait(500);
    
        cy.get('@inputEmail').clear().type('Wallygaynor')
        cy.get('[data-test="submit-btn"]').click()
        cy.contains(/invalid/i)

        cy.visit("/examples")

        cy.get('[data-test="nav-why-cypress"]').click()
        cy.location("pathname").should("equal","/")

        cy.get('[data-test="nav-overview"]').click()
        cy.location("pathname").should("equal","/overview")

        cy.get('[data-test="nav-fundamentals"]').click()
        cy.location("pathname").should("equal","/fundamentals")

        cy.get('[data-test="nav-forms"]').click()
        cy.location("pathname").should("equal","/forms")

     


    })

   
})