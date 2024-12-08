class AddNewAdress{
    selectAddAdress(){
        cy.get('[id="add_new_address"]').click();
    }

    execute(cep, identificacao, logradouro, numero){
        cy.get('[data-testid="zipcode-input"]').type(cep);
        cy.get('[data-testid="address-identification-input"]').type(identificacao);
        cy.get('[data-testid="street-input"]').type(logradouro);
        cy.get('[data-testid="address-number-input"]').type(numero);
    }

    fillNumberField(numero){
        cy.get('[data-testid="address-number-input"]').type(numero);
    }

    // checks

    checkMoreThen6NumberFieldMessage(){
        cy.contains('O campo "Número" aceita no máximo 6 caracteres.').should('be.visible');
    }

    checkInvalidCpfMessage(){
        cy.contains('CEP inválido, favor verificar.').should('be.visible');
    }

    checkWrongTypeOnNumberField() {
        cy.contains('O campo "Número" só pode conter numeros.').should('be.visible');
    }
}

export default new AddNewAdress();