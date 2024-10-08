/// <reference types="cypress" />


context('Files', () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/actions");

  })

  it('There is only one h1 (get)', () => {
    cy.get('h1').should('exist'); //to get a web element using locators
    
  })
  it('Text rendered in h1 is \'Actions\' (should)', () => {
    cy.get('h1').should('contain.text','Actions'); //chai assertion
    
  })

  it('Renders a paragraph under h1 (find)', () => {
    cy.get(".container").eq(1).find("p").should("exist"); // find to get single element under a section
    
  })

  it("Renders a multiple elements under a container (within)", () => {
    cy.get(".container").eq(2).within(()=>{
      cy.get('h4').should('exist');
      cy.get('p').should('exist');

    }); //within to get multiple elements under a section
  });


})
