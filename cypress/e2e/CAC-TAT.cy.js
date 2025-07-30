describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })
  it('preenche os campos obrigatórios e envia o formulário', () => {
    cy.get('#firstName').type('Talles')
    cy.get('#lastName').type('Rodrigues')
    cy.get('#email').type('tallesrodrigues@live.com')
    cy.get('#open-text-area').type('Teste de preenchimento de formulário')
    cy.get('button[type="submit"]').click()
    cy.get('.success').should('be.visible')
  })
})