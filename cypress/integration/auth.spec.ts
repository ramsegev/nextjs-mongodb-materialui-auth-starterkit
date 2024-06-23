describe('Authentication', () => {
    it('should allow a user to register', () => {
        cy.visit('/register');
        cy.get('input[name=email]').type('test@example.com');
        cy.get('input[name=password]').type('password');
        cy.get('button[type=submit]').click();
        cy.contains('Welcome').should('exist');
    });

    it('should allow a user to login', () => {
        cy.visit('/login');
        cy.get('input[name=email]').type('test@example.com');
        cy.get('input[name=password]').type('password');
        cy.get('button[type=submit]').click();
        cy.contains('Welcome').should('exist');
    });
});
