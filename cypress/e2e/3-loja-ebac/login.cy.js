/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () => {

   beforeEach(() => {
    cy.visit('minha-conta')
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

it('deve fazer login com sucesso - Usando massa de dados', () => {
     cy.get('#username').type(perfil.usuario)
    cy.get('#password').type(perfil.senha)
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vagnerteste.teste (não é vagnerteste.teste? Sair)')
})

    it('deve fazer login com sucesso - Usando fixture', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha , {log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vagnerteste.teste (não é vagnerteste.teste? Sair)') 

        })
})

it.only('deve fazer login com sucesso - usando Comandos customizados', () => {
    cy.login('vagnerteste.teste@hotmail.com', 'teste@123')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, vagnerteste.teste (não é vagnerteste.teste? Sair)')
})



});




