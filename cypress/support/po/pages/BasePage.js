export default class BasePage{
    getElementThatContains(text) {
        return cy.contains(text);
    }

    getElement(selector) {
        return cy.get(selector);
    }

    clickElement(selector) {
        this.getElement(selector).click();
    }

    typeInElement(selector, text) {
        this.getElement(selector).clear().type(text);
    }
}