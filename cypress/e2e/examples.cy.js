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

    it('intercept',()=>{
        cy.intercept("POST",'http://localhost:3000/examples',{
           fixture:'example.json'
        }).as("POST_METHOD")

        cy.get('[data-test="Post-btn"]').click()

    })

    it.only('grudges',()=>{
        cy.contains(/add some grudges/i)

        for(var i=1;i <=3;i++){
            cy.get('[data-test="grudge-list"]').within(()=>{
                cy.get("ul").should('have.length',0)
            })
       
            cy.get('[data-test="input-grudges"]').within(()=>{
                cy.get("input").type("My Grudges")
                
            })
    
    
    
            cy.get('[data-test="add-grudge-btn"]').click()
    
            cy.get('[data-test="grudge-list"]').within(()=>{
                cy.get("li").should('have.length.greaterThan',0)
            })
        }


        cy.get('[data-test="grudge-list"] li').its(0).within(()=>{
            cy.get("button").click()
        })

        cy.wait(600)

         if(cy.get('div').should("not.contain",/add grudge/i))
        {
            cy.get('[data-test="del-grudge-btn"]').click()
        }

       
   
    })
    

   
})