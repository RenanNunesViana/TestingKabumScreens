class CheckPersonalInfoPage{
    go(){
        cy.contains('Meus dados').click()

    }
    check(){
        cy.get('[data-testid="complete-name-input"]').should('exist')
        cy.get('[data-testid="mobile-input"]').should('exist')
        cy.get('[id="SelectBox_input"]').should('exist')
        cy.get('[data-testid="email-input"]').should('exist')
        cy.get('[data-testid="cpf-input"]').should('exist')
        cy.get('[data-testid="birth-date-input"]').should('exist')
    }
}

export default new CheckPersonalInfoPage();