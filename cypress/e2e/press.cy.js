describe('.press() command', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com')
    cy.get('input[type="text"]')
      .as('searchField')
      .type('Talking About Testing')
  })

  context('type and ...', () => {
    it('press enter', () => {
      cy.get('@searchField')
        .press('enter')
    })

    it('press ctrl+a or cmd+a', () => {
      if (Cypress.platform === 'darwin') {
        cy.get('@searchField')
          .press('cmd+a')
      } else {
        cy.get('@searchField')
          .press('ctrl+a')
      }
    })

    it('press CTRL+A or CMD+A', () => {
      if (Cypress.platform === 'darwin') {
        cy.get('@searchField')
          .press('CMD+A')
      } else {
        cy.get('@searchField')
          .press('CTRL+A')
      }
    })

    it('press selectAll', () => {
      cy.get('@searchField')
        .press('selectAll')
    })

    it('press backspace 3 times', () => {
      cy.get('@searchField')
        .then($input => {
          Cypress._.times(3, () => {
            cy.wrap($input, { log: false }).press('backspace')
          })
        })
    })

    it('press backspace, then press enter', () => {
      cy.get('@searchField')
        .press('backspace')
        .press('enter')
    })

    it('press leftArrow, then press delete', () => {
      cy.get('@searchField')
        .press('leftArrow')
        .press('del')
    })

    it('press home', () => {
      cy.get('@searchField')
        .press('home')
    })

    it('press home, then press end', () => {
      cy.get('@searchField')
        .press('home')
        .press('end')
    })
  })
})

