class GoToUserDashBoard {
    go(){
        cy.get('[data-testid="drawerButton"]')
            .eq(0)
            .click();
        cy.contains('Minha conta').click();
    }
}

export default GoToUserDashBoard;