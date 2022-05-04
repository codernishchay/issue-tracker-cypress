/// <reference types="cypress" />


describe("Issue Tracker Test", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("Check AppBar", () => {

        cy.get("[data-tag='navbar']").should('contain.text', "Issue Tracker")
        cy.get("[data-tag='create-issue-header']").should('contain.text', "Create Issue")

        // filling issue form, 
        cy.get("[data-tag='description']").type("Delete Button Not working");
        cy.get("[data-tag='assigned_to']").type("Rakesh");
        cy.get("[data-tag='severity']").type("A");

        // to submit form 
        cy.get("[data-tag='submit']").click();

        // to check if data exist 
        cy.get("[data-tag='issue-description']").should('contain.text', "Delete Button Not working")
        cy.get("[data-tag='assigned-to']").should('contain.text', "Rakesh")

        // to check close button 
        cy.get("[data-tag='close-btn']").click();
        cy.get("[data-tag='close-tag']").should('contain.text', 'Closed');


        // to check delete button 
        cy.get("[data-tag='delete-btn']").click();
        cy.get("card-container").should('not.exist')

    })
})
