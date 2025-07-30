/// <reference types="cypress"/>

describe('funcionalidade: login', () => {

   beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

   afterEach(() => {
    cy.screenshot()
   });

it('deve fazer login com sucesso', () => {
    
    cy.get('#username').type('vagnerteste.teste@hotmail.com')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vagnerteste.teste (não é vagnerteste.teste? Sair)')
})
it('Deve exibir uma mensagem de erro ao inserio um usuario invalido', () => {
    
    cy.get('#username').type('vagner@hotmail.com')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    //cy.get('.woocommerce-error').should('contain' ,'Endereço de e-mail desconhecido. ')
    cy.get('.woocommerce-error').should('exist')
});

it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {

    cy.get('#username').type('vagnerteste.teste@hotmail.com')
    cy.get('#password').type('teste@0000')
    cy.get('.woocommerce-form > .button').click()

    //cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail vagnerteste.teste@hotmail.com está incorreta. Perdeu a senha? ')
    cy.get('.woocommerce-error').should('exist')
});


})