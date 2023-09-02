describe('Avaliação Técnica-Verity', function () {
  beforeEach(function () {
    cy.visit('https://www.verity.com.br/')

  })
  const textarea = Cypress._.repeat('0123456789', 20)

  it('CT-001 - Validação dos títulos "Somos Verity_" e "Nossos clientes_"', function () {

    cy.get('[data-mesh-id="comp-lhp9lfxa1inlineContent-gridContainer"]>[data-testid="richTextElement"]>h2')
      .then(($element) => {
        expect($element, ':visible').to.have.text('Somos Verity_')
      })

    cy.get('[data-testid="richTextElement"]>h2')
      .should('have.attr', 'class', 'font_2 wixui-rich-text__text')
      .should('be.visible')
      .contains('Nossos clientes_')
  })

  it('CT-002 - Preencher campos do cadastro', function () {

    cy.get('[data-data-id="dataItem-kex01hj2"]>[data-testid="linkElement"]')
      .click()

    cy.get('input[name="nome"][id="input_comp-kwz6tqej"][type=text]')
      .should('be.visible')
      .should('have.value', '')
      .type('Ana Laura Meleiro de Brito')
      .should('have.value', 'Ana Laura Meleiro de Brito')

    cy.get('input[name="email"][type="email"][id="input_comp-kwz6tqf7"]')
      .should('be.visible')
      .type('alaura.mbrito@gmail.com')
      .should('have.value', 'alaura.mbrito@gmail.com')

    cy.wait(100)
    cy.get('input[name="phone"][id="input_comp-kwz6tqfe"]').click().type('14997715799')
      .should('have.value', '14997715799')

    cy.get('#textarea_comp-kwz6tqfr').click()
      .should('be.visible')
      .invoke('val', textarea)
      .should('have.value', textarea)

    cy.get('[data-testid="checkbox"] > [data-testid="input"]').check()

    cy.get('[data-testid="buttonElement"]').click()

  })

})