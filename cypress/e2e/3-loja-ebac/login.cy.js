/// <reference types="cypress"/>

describe('funcionalidade: login', () => {

it('deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('vagnerteste.teste@hotmail.com')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vagnerteste.teste (não é vagnerteste.teste? Sair)')
})

})