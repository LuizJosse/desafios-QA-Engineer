//Cenário: Realizar Preechimento do formulario de contato 
// Quando acesso o blog da Idwall
// E preencho formulario de contato 
// Então deve exibir menssagem de envio com Sucesso 
import { faker } from '@faker-js/faker'

describe('Formulário Falar com Especialista', () => {
  beforeEach(() => {
    cy.viewport(1440, 900)
    Cypress.on('uncaught:exception', () => false)
    cy.visit('https://blog.idwall.co/')
  })

  it('Preenche o formulário com dados fake', () => {
    // Gera os dados antes
    const nomeFake = faker.person.firstName()
     const sobrenomeFake = faker.person.lastName()
    const emailFake = faker.internet.email()
    const telefoneFake = faker.phone.number('###########')
    const mensagemFake = faker.lorem.sentence()

    // Clica no botão que leva para outro domínio
    cy.get('.elementor-element-37b06a6 > .elementor-button').click()

    // Usa cy.origin para rodar no domínio correto
    cy.origin('https://idwall.co', { args: { nomeFake, sobrenomeFake, emailFake, telefoneFake, mensagemFake } },
      ({ nomeFake, sobrenomeFake, emailFake, telefoneFake, mensagemFake }) => {
      cy.get('.styles_fields__43Sjj > :nth-child(1) > [name="first_name"]', { timeout: 10000 })
        .should('be.visible')
        .type(nomeFake)
    cy.get('input[name="last_name"]', { timeout: 10000 })
        .should('be.visible')
        .first()
        .type(sobrenomeFake)
      
     cy.get('input[name="mobile"]', { timeout: 10000 })
        .should('be.visible')
        .first()
        .type(telefoneFake)

    cy.get('input[name="company"]', { timeout: 10000 })
        .should('be.visible')
        .first()
      1  .type(mensagemFake)
    })
  })
})

