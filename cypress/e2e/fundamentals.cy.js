describe('Fundamental Test', () => {
  
  beforeEach(()=>{
    cy.visit('/fundamentals')

  })
  it('Contains correct header text', () => {
    
    cy.get('[data-test="sampleTitle"]').should("contain.text",'Testing Fundamentals')

  })

  it('Test Dropdown btns',()=>{
    cy.get('[data-test="dropdown-list"]')
    .find('[data-test^="data-btn"]')
    .each(($el)=>{
      cy.wrap($el).click()

    })

    cy.scrollTo(0, 0)
     cy.wait(500);


    cy.get('[data-test="dropdown-list"]')
    .find('[data-test^="data-btn"]')
    .each(($el)=>{
      cy.wrap($el).find('[id^="panel1a-header"]').each(($el)=>{
        cy.wrap($el).click()
      })

    })
    

  })


})