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
    
    cy.get('input[name="email"]', { timeout: 10000 })
        .should('be.visible')
        .first()
        .type("luiz.neto@stigmasystem.com.br")

    cy.get('input[name="company"]', { timeout: 10000 })
        .should('be.visible')
        .first()
        .type(mensagemFake)
    
    cy.get('select#cargo') 
       .should('be.visible')
       .select('Autônomo(a) ou Consultor(a)') 

    cy.get('select#funcionarios') 
       .should('be.visible')
       .select('51 - 200') 
    
    cy.get('select#segmento') 
       .should('be.visible')
       .select('Serviços') 

    cy.get('select#canal') 
       .should('be.visible')
       .select('WhatsApp') 

    cy.get('select#verificacao') 
      .should('be.visible')
      .select('até 1.000') 

    cy.contains('button', 'Falar com especialista')
      .should('be.visible')
      .click()

    cy.contains('h4', 'Interesse enviado com sucesso!')
     .should('be.visible')
    
    cy.get('.styles_thanksContainer__ko7k1 > .button').click()
    cy.get('h1').should('be.visible').and('contain.text', 'Reduza fraudes e gerencie riscos')



    })
  })
})

