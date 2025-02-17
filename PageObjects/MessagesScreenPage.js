export class MessagesScreenPage {
    gotoMessages() {
        cy.get('a[title*="Messages"]').should('exist').and('contain.text', 'Messages').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('#mobile-channel-list').contains('Messages').should('exist')

    }
    TypeMessage(message) {
        cy.get('div[id*="!members-"]').eq(1).should('exist').click()
        cy.get('.str-chat__message__input_wrapper').should('exist').type(message)
    }
    ClickOnSendButton() {
        cy.get('.sendButton').should('exist').click()
    }
    SendGIF() {
        cy.get('div[id*="!members-"]').eq(1).should('exist').click()
        cy.get('.gifButton').should('exist').click()
        cy.get('img[alt="gif"]').eq(0).should('be.visible').click()
        cy.get('img[alt="gif"]').eq(1).should('be.visible').click()
    }
    ClickAttachmentButton() {
        cy.get('div[id*="!members-"]').eq(0).should('exist').click()
        cy.get('.attachmentButton').should('exist').click()
    }
    ClickOnEllipsisIcon() {
        cy.get('div[aria-describedby="chat-channel-header-user-menu-btn"]').should('be.visible').click()
    }
    ValidateDMsettings(setting) {
        cy.get('.MuiPaper-rounded').should('be.visible')
        cy.get('.wrapper').contains('Direct message settings').scrollIntoView().should('be.visible').click({ force: true })
        cy.get('.backTitle').should('be.visible').and('contain.text', 'Direct Message')
        cy.get('.MuiFormGroup-root').should('exist').contains(setting).click()
    }
    AddStickers() {
        cy.get('div[id*="!members-"]').eq(1).should('exist').click()
        cy.get('.stickersButton').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.swiper-slide').eq(2).should('exist').click()
        cy.get('img[src*="https://stickers.gettr.com/stickers/v1/"]').eq(22).should('exist').click({ force: true })
    }
    CreateNewChat(name,name1) {
        cy.get('svg[width="24"][height="25"][viewBox="0 0 24 25"]').should('exist').click()
        cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('exist')
        cy.get('.menuItemContainer').contains('New chat').should('exist').click()
        cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'New chat')
        cy.get('input[placeholder*="Search for people or group"]').should('exist').type(name)
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.messaging-create-channel__user-result').eq(0).should('exist').click()
        cy.get('button[type*="button"]').contains('Create').should('exist').click()
        cy.wait(2000)
        cy.get('.MuiGrid-root.MuiGrid-container').should('be.visible').and('contain.text', name1)
    }
    CreateNewGroup(members){
        cy.get('svg[width="24"][height="25"][viewBox="0 0 24 25"]').should('exist').click()
        cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('exist')
        cy.get('.menuItemContainer').contains('Create a group').should('exist').click()
        cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'Create a group')
        cy.get('input[placeholder*="Search for people or group"]').should('exist').type(members)
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.messaging-create-channel__user-result').eq(0).should('exist').click()
        cy.get('.messaging-create-channel__user-result').eq(1).should('exist').click()
        cy.wait(2000)
        cy.get('button[type*="button"]').contains('Create').should('exist').click()
       cy.wait(3000)

    }
    DeleteChat() {
        cy.get('[class*="MuiGrid-grid-xs-3"] [xmlns*="http://www.w3.org"]').should('exist').click({ force: true })
        cy.get('h3[class*="jss"]').contains('Chat info').should('be.visible')
        cy.get('button[class*="jss"]').contains('Delete chat').click()
        cy.get('.dialogContainer').contains('Delete chat')
        cy.get('button[class*="danger"]').should('exist').and('contain.text', 'Delete').click()
    }
    ForwardMessage(search) {
        cy.get('.str-chat__main-panel').should('exist')
        cy.get('.str-chat__message-inner.unpinned-message').eq(8).should('exist').trigger('mouseover')
        cy.get('div[aria-label*="Forward"]').eq(9).should('exist').click({ force: true })
        cy.get('.MuiGrid-root.MuiGrid-container').should('exist').and('contain.text', 'Forward Messages')
        cy.get('button[type*="button"]').contains('Send').should('exist').click()
        cy.get('div[role*="dialog"]').contains('Forward message to').should('exist')
        cy.get('input[placeholder*="Search for people or group"]').should('exist').type(search)
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.messaging-create-channel__user-result').eq(0).should('exist').click({ force: true })
        cy.get('button p.MuiTypography-body1').contains('Forward').should('exist').click()
        cy.wait(2000)
    }
    DeleteMessage() {
        cy.get('.str-chat__main-panel').should('exist')
        cy.get('.str-chat__message-inner.unpinned-message').last().should('exist').trigger('mouseover')
        cy.get('div[aria-label*="More"]').last().should('exist').click({ force: true })
        cy.get('.str-chat__message-actions-box--open').should('exist')
        cy.get('.patch_delete').should('exist').and('contain.text', 'Delete').click({ force: true })
        cy.get('.str-chat__message--deleted-inner').should('exist')
    }
    EditMessage() {
        cy.get('.str-chat__main-panel').should('exist')
        cy.get('.str-chat__message-inner.unpinned-message').last().should('exist').trigger('mouseover')
        cy.get('div[aria-label*="More"]').last().should('exist').click({ force: true })
        cy.get('.str-chat__message-actions-box--open').should('exist')
        cy.get('.patch_edit-message').should('exist').and('contain.text', 'Edit message').click({ force: true })
        cy.get('.str-chat__modal__editpop').contains('Edit message').should('exist')
    }
  
}