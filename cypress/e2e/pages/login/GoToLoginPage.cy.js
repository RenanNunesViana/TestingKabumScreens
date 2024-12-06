class GoToLoginPage {
    enterURL() {
        cy.visit(
            "https://www.kabum.com.br/"
        );
    }

    goToLoginPage(){
        cy.get('[data-testid="drawerButton"]')
            .eq(0)
            .click();
        cy.contains("button", "Entre").click();
    }
}
const goToLoginPage = new GoToLoginPage();
export default goToLoginPage;