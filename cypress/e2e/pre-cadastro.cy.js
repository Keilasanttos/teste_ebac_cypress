/// <reference types="cypress" />


const page = 'http://lojaebac.ebaconline.art.br'



describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.origin(page, () => {
            cy.visit('/minha-conta')

        })
    })

    it('Deve completar o pré cadastro com sucesso', () => {
        cy.origin(page, () => {
            const { faker } = Cypress.require('@faker-js/faker');
            cy.get('#reg_email').type(faker.internet.email())
            cy.get('#reg_password').type('teste00teste1')
            cy.get(':nth-child(4) > .button').click()

            cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            cy.get('#account_first_name').type(faker.person.firstName())
            cy.get('#account_last_name').type(faker.person.lastName())
            cy.get('.woocommerce-Button').click()
            cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.'
            )

        });

    })

})