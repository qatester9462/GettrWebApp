export class ProfileMenuPage {
    ClickOnProfileIcon() {
        cy.get('.user-menu-trigger').should('exist').click()
        cy.get('.MuiPaper-rounded').should('exist')

    }
    ValidateProfile() {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('.MuiTab-wrapper').contains('Posts').should('exist')
        cy.get('.MuiTab-wrapper').contains('Replies').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/comments');
        cy.get('.MuiTab-wrapper').contains('Live').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/live');
        cy.get('.MuiTab-wrapper').contains('GTok').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/gtok');
        cy.get('.MuiTab-wrapper').contains('Media').scrollIntoView().should('exist').click({ force: true })
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/medias');
        cy.get('.MuiTab-wrapper').contains('Likes').scrollIntoView().should('exist').click({ force: true })
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/likes');
        cy.get('a span').contains('Following').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/following');
        cy.get('.MuiTab-wrapper').contains('Followers').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/followers');

    }
    EditProfile(bio, string) {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('.MuiButtonBase-root').contains('Edit Profile').scrollIntoView().should('exist').click({ force: true })
        cy.get('.form.notranslate').contains('Edit Profile').should('exist')
        cy.get('div label[class*="jss"]').contains('Display name').should('exist')
        cy.get('.MuiTextField-root').eq(0).should('exist')
        cy.get('div label[class*="jss"]').contains('GETTR ID').should('exist')
        cy.get('.MuiTextField-root').eq(1).should('exist')
        cy.get('div label[class*="jss"]').contains('Bio').should('exist')
        cy.get('.MuiTextField-root').eq(2).should('exist').clear().type(bio + string)
        cy.get('div label[class*="jss"]').contains('Location').should('exist')
        cy.get('.MuiTextField-root').eq(3).should('exist')
        cy.get('div label[class*="jss"]').contains('Website').should('exist')
        cy.get('.MuiTextField-root').eq(4).should('exist')
        cy.get('button[type*="button"]').contains('Save').should('exist').click()
        cy.wait(2000)
    }
    ValidateSearchIcon(search) {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('#profileSearch').scrollIntoView().should('exist').click({ force: true })
        cy.get('[role="dialog"]').should('exist')
        cy.get('.MuiOutlinedInput-inputAdornedStart').should('exist').type(search + '{enter}')
        cy.wait(3000)
        cy.url().should('include', '/search/profile?q=test')
        cy.get('.search.hover-class').should('exist').and('contain.text', 'test')
    }
    ValidateSuggetsedUsers() {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('a span').contains('Following').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/following');
        cy.get('.MuiTab-wrapper').contains('Suggested').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/recommend');
        cy.get('.card-ext').should('exist')
        cy.get('button[type*="button"] span').contains('Follow').should('exist')
    }
    ValidateLiveTab() {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('.MuiTab-wrapper').contains('Live').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/live');
        cy.get('.profile.hover-class').should('exist')
    }
    PinLivestream() {
        cy.wait(5000);
        cy.get('svg[aria-controls*="more-menu"]').eq(0).click({ force: true });
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Pin to your profile').should('be.visible').click({ force: true });
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Pin the post to profile?');
        cy.get('[class*="MuiTypography-body1"]').contains(/^Pin$/).should('be.visible').click();
    }
    UnpinLivestream() {
        cy.get('.MuiTab-wrapper').contains('Posts').should('exist').click()
        cy.wait(5000)
        cy.get('svg[aria-controls*="more-menu"]').eq(0).click({ force: true });
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Unpin the post from profile?').should('be.visible').click({ force: true });
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unpin the post from profile?');
        cy.get('[class*="MuiTypography-body1"]').contains(/^Unpin$/).should('be.visible').click();
    }
    EditLivestreamDetails(title) {
        cy.wait(5000)
        cy.get('svg[aria-controls*="more-menu"]').eq(0).click({ force: true });
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Edit livestream details').should('be.visible').click({ force: true });
        cy.get('[role*="dialog"]').contains('Edit livestream details').should('exist')
        cy.get('.MuiInputLabel-animated').contains('Title (required)').should('exist')
        cy.get('[placeholder="Add a title that describes your live stream"]').should('exist').type(title)
        cy.get('.MuiInputLabel-animated').contains('Description').should('exist')
        cy.get('[data-placeholder="Tell your views more about your live stream"]').should('exist')
        cy.get('.MuiFormLabel-filled').contains('Categories').should('exist')
        cy.get('#mui-component-select-categoryIds').should('exist')
        cy.get('.MuiFormLabel-filled').contains('Language').should('exist')
        cy.get('input[aria-autocomplete*="list"]').eq(0).should('exist')
        cy.get('.MuiFormLabel-filled').contains('Location').should('exist')
        cy.get('input[aria-autocomplete*="list"]').eq(1).should('exist')
        cy.get('.MuiButton-label').contains('Done').should('exist').click()
    }
    VlidateLikesTab() {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('.MuiTab-wrapper').contains('Likes').scrollIntoView().should('exist').click({ force: true })
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/likes');
        cy.get('[data-index="0"] > :nth-child(1)').scrollIntoView().should('be.visible'); // first post
        cy.get("button[title='Like'], button[title='Unlike']").should('have.attr', 'aria-label', 'Unlike');
    }
    ValidateGtokTab() {
        cy.get('.MuiTypography-body1').contains('Profile').should('exist').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('.MuiTab-wrapper').contains('GTok').scrollIntoView().should('exist').click({ force: true })
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/').and('include', '/gtok');
        cy.get('a[href*="/gtok/"]').eq(0).should('exist').trigger('mouseover')
        cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
        cy.get('.MuiPaper-rounded').contains('Edit cover').should('exist').click()
        cy.get('.dialogContainer').should('exist')
        cy.get('.header').contains('Edit cover').should('exist')
    }
    EditCoverFromVideo() {
        cy.get('.MuiFormControlLabel-label.MuiTypography-body1').contains('Choose from video').should('exist').click()
        cy.get('.MuiIconButton-colorPrimary').should("have.class", "Mui-checked")
        cy.wait(4000)
        cy.get('div img[src*="data:image/"]').eq(1).should('exist').click({ force: true })
        cy.get('.MuiButtonBase-root').contains('Save').should('exist').click()
        cy.get('.dialogContainer').should('not.exist')
    }
    EditCoverFromImage(media){
        cy.get('.MuiFormControlLabel-label.MuiTypography-body1').contains('Upload image').should('exist').click()
        cy.get('.MuiIconButton-colorPrimary').should("have.class", "Mui-checked")
        cy.wait(4000)
        cy.get('input[type="file"]').attachFile(media)
        cy.wait(6000)
        cy.get('div[role*="dialog"]').contains('Edit media').should('exist')
        cy.get('.MuiSlider-rail').should('exist').click()
        cy.get('button[type*="submit"]').contains('Done').should('exist').click()
        cy.get('.MuiButtonBase-root').contains('Save').should('exist').click()
        cy.get('.dialogContainer').should('not.exist')
    }
    ValidateSwitchAccount() {
        cy.get('.MuiTypography-body1').contains('Switch account').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Switch account').should('exist')
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Add an existing account').should('exist')
    }
    GETTRPremium() {
        cy.get('.MuiTypography-body1').contains('Start free GETTR Premium trial').should('exist').click()
        cy.get('.dialogContainer').contains('GETTR Premium').should('exist')
        cy.get('div[class*="jss"]').contains('Ad-Free').should('exist').click()
        cy.get('.MuiGrid-item').contains('Ad-Free').should('exist')
        cy.get('[type*="submit"]').contains('OK').should('exist').click()
        cy.get('div[class*="jss"]').contains('AI Avatar').should('exist').click()
        cy.get('.MuiGrid-item').contains('AI Avatar').should('exist')
        cy.get('[type*="submit"]').contains('OK').should('exist').click()
        cy.get('div[class*="jss"]').contains('Express Verify').should('exist').click()
        cy.get('.MuiGrid-item').contains('Express Verify').should('exist')
        cy.get('[type*="submit"]').contains('OK').should('exist').click()
        cy.get('div[class*="jss"]').contains('Express Verify').should('exist').click()
        cy.get('.MuiGrid-item').contains('Express Verify').should('exist')
        cy.get('[type*="submit"]').contains('OK').should('exist').click()
        cy.get('div[class*="jss"]').contains('Priority Access').should('exist').click()
        cy.get('.MuiGrid-item').contains('Priority Access').should('exist')
        cy.get('[type*="submit"]').contains('OK').should('exist').click()
    }
    ValidateBookmarks() {
        cy.get('.MuiTypography-body1').contains('Bookmarks').should('exist').click()
        cy.url().should('include', '/bookmarks')
        cy.get('.backTitle').contains('Bookmarks').should('exist')
        cy.get('#vertical-tabpanel-0').should('exist')
        cy.get("button[title='Bookmark'], button[title='Unbookmark']").should('have.attr', 'aria-label', 'Unbookmark');

    }
    ValidateLanguages() {
        cy.get('.MuiTypography-body1').contains('Language').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Language').should('exist')
    }
    ValidateDarkMode() {
        cy.get('.MuiTypography-body1').contains('Dark mode').should('exist')
        cy.get('.MuiSwitch-root').should('exist').click()
        cy.get('body').should("have.class", "dark-mode")
        cy.get('.user-menu-trigger').should('exist').click()
        cy.get('.MuiPaper-rounded').should('exist')
        cy.get('.MuiTypography-body1').contains('Dark mode').should('exist')
        cy.get('.MuiSwitch-colorSecondary').should("have.class", "Mui-checked")
    }
    ValidateTheme() {
        cy.get('.MuiTypography-body1').contains('Theme').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Theme').should('exist')
    }
    ValidateLogout() {
        cy.get('.MuiTypography-body1').contains('Log out').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Log out').should('exist')
        cy.get('[class*="MuiTypography-body1"]').contains(/^Log out$/).should('be.visible').click();
        cy.wait(2000)
        cy.url().should('include', '/trending')
    }
    
}
