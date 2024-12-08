class LoginPage {
    enterUserNamePassword(username, password) {
        cy.get('[data-testid="login-input"]').type(username);
        cy.get('[data-testid="password-input"]').type(password);
        return this;
    }
    clickSubmitButton() {
        cy.get('[data-testid="login-submit-button"]').eq(0).click();
        cy.wait(5000)
        return this;
    }
    verifyPageUsername(username) {
        cy.get('[data-testid="drawerButton"]').eq(0).click();
        const textoDeBoasVindas = `Olá. ${Cypress.env('USER_FIRST_NAME')}`;

        return cy.get('[id="menuLateral"] h4').contains(textoDeBoasVindas).should('exist');
    }
}
const login = new LoginPage();
export default login;