// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('waitForElementToBeVisible', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('be.visible');
});

Cypress.Commands.add('waitForElementToBeClickable', (selector, timeout = 10000) => {
    cy.get(selector, { timeout }).should('not.be.disabled').and('be.visible');
});

Cypress.Commands.add('dragAndDrop', (sourceSelector, targetSelector) => {
    cy.get(sourceSelector).trigger('mousedown', { which: 1 });
    cy.get(targetSelector)
        .trigger('mousemove', { force: true })
        .trigger('mouseup', { force: true });
});

Cypress.Commands.add('resizeElement', (selector, widthChange, heightChange) => {
    cy.get(selector)
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: widthChange, clientY: heightChange })
        .trigger('mouseup');
});

Cypress.Commands.add('scrollToElement', (selector) => {
    cy.get(selector).scrollIntoView();
});

Cypress.Commands.add('isScrolledIntoView', (selector) => {
    cy.get(selector).then($el => {
        const bottom = Cypress.$(cy.window().height());
        const rect = $el[0].getBoundingClientRect();
        expect(rect.top).to.be.lessThan(bottom);
        expect(rect.bottom).to.be.greaterThan(0);
    });
});

Cypress.Commands.add('hover', { prevSubject: 'element' }, (subject) => {
    cy.wrap(subject).trigger('mouseover');
});
