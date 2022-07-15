describe('Todo Application tests', () => {
    it.skip('Visits the Todo application', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
    });
    it.skip('Contains todo input element', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
        cy.get('.new-todo')
    });
    it.skip('Adds a new todo', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
        cy.get('.new-todo').type('New Todo {enter}')
    });
    it.skip('asserts change in application state', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
       
        cy.get('.new-todo').type('New Todo {enter}')
        cy.get('.new-todo').type('Another Todo {enter}')
        cy.get(".todo-list").find('li').should('have.length', 2)
    });
    it('asserts inserted todo items are present', () => {
        cy.visit('http://todomvc.com/examples/react/#/')
       
        cy.get('.new-todo').type('New Todo {enter}')
        cy.get('.new-todo').type('Another Todo {enter}')
        cy.get('.new-todo').type('third one {enter}')
        cy.get('.new-todo').type('4th one {enter}')
        cy.get(".todo-list").find('li').should('have.length', 4)
        cy.get('li:nth-child(1)>div>label').should('have.text', 'New Todo')
        cy.get('li:nth-child(2)>div>label').should('have.text', 'Another Todo')
        cy.get('li:nth-child(3)>div>label').should('have.text', 'third one')
        cy.get('li:nth-child(4)>div>label').should('have.text', '4th one')
    });
});
