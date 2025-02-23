/// <reference types="cypress" />

context('Funcinalidade Login', () => {
    it('Deve fazer login com sucesso', () => {

        cy.origin('http://lojaebac.ebaconline.art.br', () => {
            cy.visit('/minha-conta')
            cy.get('#username').type("aluno_ebac@teste.com")
            cy.get('#password').type('teste@teste.com')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.page-title').should('contain', 'Minha conta')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')

        })

    })

})
it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
    cy.origin('http://lojaebac.ebaconline.art.br', () => {
        cy.visit('/minha-conta')
        cy.get('#username').type("aluno_ebac@teste.com")
        cy.get('#password').type('teste@teste.')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta')

    })
})

it.only('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
    cy.origin('http://lojaebac.ebaconline.art.br', () => {
        cy.visit('/minha-conta')
        cy.get('#username').type("aluno_ebac@teste")
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-error').should('contain', 'Erro: O usuário aluno_ebac@teste não está registrado neste site. Se você não está certo de seu nome de usuário, experimente o endereço de e-mail.')

    })

})

