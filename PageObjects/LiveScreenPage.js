export class LiveScreenPage {
  gotoLivePage() {
    cy.get('a[title*="Live"]').should('exist').and('contain.text', 'Live').click()
    cy.get('.defaultLoaderWrapper').should('not.exist')
    cy.url().should('include', '/livenow');
  }
  SortByHottest() {
    cy.get('.MuiSelect-selectMenu.MuiInputBase-input ').should('be.visible').and('contain.text', 'Sort by').click()
    cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('be.visible')
    cy.get('div ul li[data-value*="hot"]').should('be.visible').and('contain.text', 'Hottest').click()
    cy.get('.defaultLoaderWrapper').should('not.exist')
    cy.url().should('include', '/livenow?sort=hot');
  }
  SortByRecentlyStarted() {
    cy.get('.MuiSelect-selectMenu.MuiInputBase-input ').should('be.visible').and('contain.text', 'Sort by').click()
    cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('be.visible')
    cy.get('div ul li[data-value*="time"]').should('be.visible').and('contain.text', 'Recently started').click()
    cy.get('.defaultLoaderWrapper').should('not.exist')
    cy.url().should('include', '/livenow?sort=time');
  }
  gotoHistory() {
    cy.get('.MuiTab-wrapper').contains('History').should('be.visible').click()
    cy.url().should('include', '/livenow/history');
  }
  DeleteHistoryVideo() {
    cy.get('div[data-index*="1"]').scrollIntoView().trigger('mouseover')
    cy.get('svg[aria-label*="Remove from watch history"]').eq(1).should('exist').click({ force: true })
  }
  validateToast(message) {
    cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', message)
  }
  clickEllipsisIcon() {
    cy.get('svg[aria-controls*="more-menu"]').eq(1).should('exist').click({ force: true }); // ellipsis icon
  }
  FollowUser() {
    cy.wait(1000)
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
    cy.get('.MuiTypography-root.MuiTypography-body1')
      .should('be.visible')
      .then((statement) => {
        const text = statement.text().trim();
        if (text.includes('Unfollow @')) {
          // Unfollow the user
          cy.contains('Unfollow').should('exist').click({ force: true });
          cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unfollow @');
          cy.get('[class*="MuiTypography-body1"]').contains(/^Confirm$/).should('be.visible').click();
          cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You unfollowed @')

        } else {
          // Follow the user
          cy.get('.MuiTypography-root.MuiTypography-body1').contains('Follow @').should('exist').click({ force: true });
          cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You followed @')
        }
      });
  }
  SharePost() {
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible').contains('Share').click({ force: true })
    cy.get('.MuiListItem-gutters.MuiListItem-button').should('exist')
    cy.get('.MuiTypography-body1').contains('X').should('exist')
    cy.get('.MuiTypography-body1').contains('Facebook').should('exist')
    cy.get('.MuiTypography-body1').contains('WhatsApp').should('exist')
    cy.get('.MuiTypography-body1').contains('Reddit').should('exist')
    cy.get('.MuiTypography-body1').contains('Pinterest').should('exist')
    cy.get('.MuiTypography-body1').contains('Telegram').should('exist')
  }
  FollowedHosts() {
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Followed Hosts').should('be.visible')
    cy.get('button[aria-label*="See all"]').should('be.visible').click()
    cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'Followed Hosts')
  }
  RecommendedHosts() {
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Recommended Hosts').should('be.visible')
    cy.get('span[class*="jss"]').contains('Show more').should('be.visible').click()//click on show more
    cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'Recommended Hosts')
  }
  HistorySearchBar(word) {
    cy.get('.MuiInputBase-adornedStart.MuiOutlinedInput-adornedStart').should('exist')
    cy.get('#searchInput').should('exist').type(`${word}{enter}`)

  }
  clickGoLive(){
    cy.get('#simple-popper').contains('Go Live').should('exist').click()
}
CreateLiveStream(){
  cy.visit('https://qa4-cc.gettr-qa.com/liveHost/')
  cy.get('.up_lg_name__o-m5J').contains('Webcam').should('exist').click()
  cy.url().should('include', '/liveHost/webcam')
  cy.wait(5000)
  cy.get('.MuiCircularProgress svg').should('not.exist')
  cy.get('.Style_layout__Ubny3').contains('Create Livestream').should('exist')
  cy.get('[type*="submit"]').contains('Done').should('exist').click()
  cy.get('.Style_layout__Ubny3').contains('Stream Preview').should('exist')
  cy.get('[type*="submit"]').contains('Done').should('exist').click()
  cy.get('.Style_layout__XCZJ3').should('exist')
  cy.get('.MuiCircularProgress-determinate').should('have.attr', 'aria-valuenow', '100')
  cy.get('[type*="button"]').contains('End Livestream').should('exist').click()
  cy.get('.MuiPaper-rounded').contains('End Livestream').should('exist')
  cy.get('.MuiButton-root.MuiButton-text').contains(/^End Livestream$/).should('be.visible').click()
  cy.get('[role*="dialog"]').should('exist')
  cy.get('.MuiBox-root.css-1weuri3').contains('End Livestream').should('exist')
  cy.get('.MuiButton-root.MuiButton-text').contains('Dismiss').should('exist').click()
}

}
