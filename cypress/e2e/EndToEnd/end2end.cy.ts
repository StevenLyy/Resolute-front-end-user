describe('LoginWithAdmin', () => {
    it('Login', ()=>{
        cy.visit("localhost:3000/login");
        cy.get('#username').type('antonv2');
        cy.get('#password').type('test');
        cy.get('button[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("You are not a user");
        });
    })
});

describe('FalseLogin', () => {
    it('Login', ()=>{
        cy.visit("localhost:3000/login");
        cy.get('#username').type('e4i0qew4iew04qo4');
        cy.get('#password').type('kr0ewkr9ew0ekqw2');
        cy.get('button[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Wrong username or password");
        });
    })
});

describe('CreateRoutine', () => {
    it('Login', () => {
        cy.visit("localhost:3000/login");
        cy.get('#username').type('anton');
        cy.get('#password').type('medic');
        cy.get('button[type=submit]').click();
        cy.contains("Routines of Hans");
        cy.contains('a', 'Create a new routine').click();
        cy.get('#routineInput').type("Hans' upper body routine");
        cy.get('div').contains('label', 'Diamond Push Ups').click();
        cy.get('div').contains('label', 'Push-ups').click();
        cy.get('div').contains('label', 'Planks').click();
        cy.get('div').contains('label', 'Archer pull up').click();
        cy.get('button[type=submit]').click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Routine created");});
        cy.get('a').contains("Hans' upper body routine");
    });
});