class LoginPage {
    enterUserNamePassword(username, password) {
        cy.get('[data-testid="login-input"]').type(username);
        cy.get('[data-testid="password-input"]').type(password);
        return this;
    }
    clickSubmitButton() {
        cy.get('[data-testid="login-submit-button"]').eq(0).click();
        return this;
    }
    verifyPageUsername(username) {
        cy.get('[data-testid="drawerButton"]').check()
        const textoDeBoasVindas = `Olá. ${username}`;

        return cy.contains('h4', textoDeBoasVindas).should('exist');
    }
}
const login = new LoginPage();
export default login;