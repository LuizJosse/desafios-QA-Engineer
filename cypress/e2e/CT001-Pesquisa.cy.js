//Cenário: Pesquisar um post no blog da Idwall
// Quando acesso o blog da Idwall
// E pesquiso um post informando um título existente
// Então deve exibir o post pesquisado em uma página de resultados

describe('Pesquisar post no blog Idwall', () => {
  it('Deve pesquisar um termo corretamente', () => {
    cy.viewport(1440, 900)
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    cy.visit('https://blog.idwall.co/')

    cy.wait(2000) 
    cy.get('form.search_form').then($form => {
      $form.find('input[name="s"]').val('Onboarding Antifraude: Como equilibrar segurança e experiência do cliente?')
      $form[0].submit()
    })

  cy.get('.elementor-element-474a3212 > .elementor-heading-title')
  .should('be.visible')
  .and('contain.text', 'Onboarding Antifraude')
  })
})
