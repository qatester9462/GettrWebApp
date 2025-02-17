export class NotificationsScreenPage {
gotoNotifications(){
    cy.get('a[href*="/notifications"]').should('exist').click()
    cy.url().should('include', '/notifications')
    cy.get('.backTitle').contains('Notifications').should('exist')
}
ValidateLiveStreams(){
    cy.get('.MuiTab-wrapper').eq(0).contains('All').should('exist').click()
    cy.get('.MuiListItem-gutters.MuiListItem-button').eq(0).contains('Livestreams').should('exist').click()
    cy.url().should('include', '/notifications/livestream')
    cy.get('.backTitle').contains('Livestreams').should('exist')
}
RemoveNotification(){
    cy.get('[data-index="0"]').should('exist')
    cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('exist')
    cy.get('.wrapper').eq(0).contains('Remove this notification').click({force:true})
}
TurnOnOffNotification(){
    cy.get('[data-index="0"]').should('exist')
    cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('exist')
    cy.get('.wrapper').eq(1).click({force:true})
    //cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Livestream notifications from @ turned on.')
    cy.get('[data-index="0"]').should('exist')
    cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('exist')
    cy.get('.wrapper').eq(1).click({force:true})
    //cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Livestream notifications from @ turned on.')
}
gotoPolls(){
    cy.get('.MuiTab-wrapper').eq(0).contains('All').should('exist').click()
    cy.get('.MuiListItem-gutters.MuiListItem-button').eq(1).contains('Polls').should('exist').click()
    cy.url().should('include', '/notifications/polls')
    cy.get('.backTitle').contains('Polls').should('exist')
}
gotoMentions(){
    cy.get('.MuiTab-wrapper').eq(1).contains('Mentions').should('exist').click()
    cy.url().should('include', '/notifications/mentions')
   
}
}