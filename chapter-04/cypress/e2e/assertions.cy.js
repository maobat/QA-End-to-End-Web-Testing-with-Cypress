describe('Cypress Assertions', () => {
    it.skip('Using Implicit subjects - should', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        // Check if todo input element has expected placeholder value
        cy.get(".new-todo").should('have.attr', 'placeholder', 'What needs to be done?')
    });

    it.skip('Using Implicit subjects - and()', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        // Check if todo input element has expected placeholder value
        cy.get(".new-todo").should('have.attr', 'placeholder', 'What needs to be done?')
        .and('have.class', 'new-todo')
    });

    it.skip('Using Explicit subjects', () => {
        cy.visit('http://todomvc.com/examples/react/#/')

        cy.get(".new-todo").should( ($elem) => {
        expect($elem).to.have.class('new-todo')
        expect($elem).to.have.attr('placeholder','What needs to be done?')
        })
    });

    it('Exercise Implicit & Explicit subjects - Implicit Test', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type('ABC.. {enter}')
        cy.get('li:nth-child(1)>div>label').should('have.text', 'ABC..')
    });

    it('Explicit test', () => {
        cy.get(".new-todo").type("New Todo {Enter}");
        cy.get(".new-todo").type("Another New Todo {Enter}").debug();
        cy.get('.todo-list>li:nth-child(1)').find('.toggle').click();
        cy.get('.todo-list>li:nth-child(2)').find('.toggle').click();
      });
});
