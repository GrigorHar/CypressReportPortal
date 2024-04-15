import {BasePage} from "../pages/BasePage";

// const username = Cypress.env('username');
const password = Cypress.env('password');
const users = Cypress.env('users')
const { username } = users.baseUser
export class LoginPage extends BasePage {

    get 'login input'() {
        return cy.get('input[placeholder="Login"]');
    }

    get 'password input'() {
        return cy.get('input[placeholder="Password"]');
    }

    get 'sign in button'() {
        return cy.get('button[type="submit"]');
    }

    visit() {
        cy.visit('https://reportportal.epam.com/');
    }

    enterCredentials() {
        this['login input'].type(username);
        this['password input'].type(password);
    }

    clickSignIn() {
        this['sign in button'].click();
    }
}