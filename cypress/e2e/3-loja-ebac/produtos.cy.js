/// <reference types="cypress"/>

describe('Funcionaldiade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
       //first()
        //.eq(2)
        //.last()
        .contains('Ajax Full-Zip Sweatshirt')
        .click()

        cy.get('#tab-title-description > a').should('contain' , 'Descrição')
     
      
    });
});

    
            



