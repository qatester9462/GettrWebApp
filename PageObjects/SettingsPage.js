export class SettingsPage{
gotoSettings(){
    cy.get('.MuiTypography-body1').contains('Settings').should('exist').click()
    cy.url().should('include', '/settings/my-account')
    cy.get('.defaultLoaderWrapper').should('not.exist')
    cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
}
ValidateAccountInfo(){
    cy.get('.MuiBox-root').contains('Account Information').should('exist')
    cy.get('.emailTitle').contains('Username').should('exist')
    cy.get('.emailTitle').contains('Password').should('exist')
    cy.get('.emailTitle').contains('Email').should('exist')
    cy.get('.emailTitle').contains('Phone').should('exist')
}
LanguageSettings(){
    cy.get('.MuiTabs-vertical').should('exist')
    cy.get('.MuiTab-labelIcon').contains('Languages').should('exist').click()
    cy.url().should('include', '/settings/interface-language')
    cy.get('.MuiBox-root').contains('Language').should('exist')
    cy.get('.MuiInput-input').should('exist').click()
    cy.get('.MuiPaper-rounded').should('exist')

}
DisplaySetting(){
    cy.get('.MuiTabs-vertical').should('exist')
    cy.get('.MuiTab-labelIcon').contains('Display').should('exist').click()
    cy.url().should('include', '/settings/display')
    cy.get('.MuiBox-root').contains('Display').should('exist')
}
PrivacySetting(){
    cy.get('.MuiTabs-vertical').should('exist')
    cy.get('.MuiTab-labelIcon').contains('Privacy').should('exist').click()
    cy.url().should('include', '/settings/privacy')
    cy.get('.MuiBox-root').contains('Privacy').should('exist')
}
ValidateMutedUsers(){
    cy.get('.MuiTab-wrapper').contains('Mute and block').should('exist').click()
    cy.get('.backTitle').contains('Mute and block').should('exist')
    cy.get('#tab-0').contains('Muted').should('exist')
    cy.get('#tabpanel-0').should('exist')
    cy.get('a[href*="/user/"]').should('exist')
    cy.get('.MuiButton-label').contains('Muted').should('exist')
}
ValidateBlockedUsers(){
    cy.get('.MuiTab-wrapper').contains('Mute and block').should('exist').click()
    cy.get('.backTitle').contains('Mute and block').should('exist')
    cy.get('#tab-1').contains('Blocked').should('exist').click()
    cy.get('#tabpanel-0').should('exist')
    cy.get('a[href*="/user/"]').should('exist')
    cy.get('.MuiButton-label').contains('Blocked').should('exist')

}
DirectMessageSetting(){
    cy.get('.MuiTab-wrapper').contains('Direct Message').should('exist').click()
    cy.get('.backTitle').contains('Direct Message').should('exist')
    cy.get('.MuiFormGroup-root').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Everyone').should('exist').click()
}
ValidateInterests(){
    cy.get('.MuiTab-wrapper').contains('Interests').should('exist').click()
    cy.get('.dialogContainer').should('exist')
    cy.get('.title').contains('Interests').should('exist')
    cy.get('div[tabindex*="0"]').should('exist')
}
GTokSafeMode(){
   cy.get('.MuiFormControlLabel-label').contains('GTok safe mode').should('exist').click()
   cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
}
NotificationSetting(){
    cy.get('.MuiTabs-vertical').should('exist')
    cy.get('.MuiTab-labelIcon').contains('Notifications').should('exist').click()
    cy.url().should('include', '/settings/notifications')
    cy.get('.MuiBox-root').contains('Notifications').should('exist')
}
RepostAndQuotes(){
    cy.get('p[class*="jss"]').contains('Reposts and Quotes').should('exist').click()
    cy.get('.backTitle').contains('Reposts and Quotes').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Reposts and Quotes').should('exist')
    cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('People I follow').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Everyone').should('exist')
}
MentionsSetting(){
    cy.get('p[class*="jss"]').contains('Mentions').should('exist').click()
    cy.get('.backTitle').contains('Mentions').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Mentions').should('exist')
    cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('People I follow').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Everyone').should('exist')
}
RepliesSetting(){
    cy.get('p[class*="jss"]').contains('Replies').should('exist').click()
    cy.get('.backTitle').contains('Replies').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Replies').should('exist')
    cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('People I follow').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Everyone').should('exist')
}
LikesSetting(){
    cy.get('p[class*="jss"]').contains('Likes').should('exist').click()
    cy.get('.backTitle').contains('Likes').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Likes').should('exist')
    cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('People I follow').should('exist')
    cy.get('.MuiFormControlLabel-labelPlacementStart').contains('Everyone').should('exist')
}
NewFollowersSetting(){
    cy.get('p[class*="jss"]').contains('New followers').should('exist')
    cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
}
}
