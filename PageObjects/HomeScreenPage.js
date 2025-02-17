export class HomeScreenPage {
    ClickCreateButton() {
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Create').should('be.visible').click()
    }
   
    ClickWritePost() {
        cy.get('#simple-popper').contains('Write a Post').should('be.visible').click()
    }
    validateWritePost(post) {
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Write a Post').should('be.visible')
        cy.get('.post-preview-box').should('be.visible').type(post)
    }
    ClickPost() {
        cy.get('.action-bar > ').contains('Post').should('be.visible').click()
    }
    createGTok() {
        cy.get('#simple-popper').contains('Create a GTok').should('be.visible').click()
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Create a GTok').should('be.visible')
    }
    uploadfile(file) {
        cy.wait(5000)//[accept="video/mp4,video/quicktime"]
        cy.get('input[type="file"]').attachFile(file)
        cy.get('.MuiCircularProgress-determinate:nth-child(2)').should('have.attr', 'aria-valuenow', '100')
        cy.get('.dialogContainer .MuiButtonBase-root:nth-child(3)').should('not.be.visible') //Cancel button should not be visible
        //cy.get('.MuiButtonBase-root').contains('Post').should('be.visible').click()
    }
    gotoLive() {
        cy.get('a[href*="/livenow"]').should('be.visible').and('contain.text', 'Live').click()
        cy.url().should('include', '/livenow')
        cy.get('.MuiTab-wrapper').should('be.visible').and('contain.text', 'Popular')
    }
    ShowMoreGettrNews() {
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('GETTR News').should('be.visible')
        cy.contains('span[class*="jss"]', 'Show more').eq(0).should('be.visible').click()
        cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'GETTR News')
        cy.get('svg[width="32"][height="32"][viewBox="0 0 32 32"]').should('be.visible').click()
    }
    gotoExplore() {
        cy.get('.forYou-tab > .MuiTab-wrapper').should('be.visible').and('contain.text', 'Explore').click()
        cy.get('[data-index="0"] > :nth-child(1)').scrollIntoView().should('be.visible'); // first post
    }
    gotoFollowing() {
        cy.get('.following-tab > .MuiTab-wrapper').should('be.visible').and('contain.text', 'Following').click()
        cy.url().should('include', '/following')
    }
    ValidateFollowedUsers() {
        cy.get('[data-index="0"] > :nth-child(1)').scrollIntoView().should('be.visible'); // first post
        cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
        cy.get('.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Unfollow @').should('be.visible')
    }
    gotoBreaking() {
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('.chill-tab > .MuiTab-wrapper').should('be.visible').and('contain.text', 'Breaking').click()
        cy.url().should('include', '/chill')
    }
    ShowMoreProfileSuggestion() {
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Suggested for you')
        cy.get('span[class*="jss"]').contains('Show more').should('be.visible').click()
        cy.get('.MuiDialogTitle-root').should('be.visible').and('contain.text', 'Suggested for you')
        cy.get('svg[width="32"][height="32"][viewBox="0 0 32 32"]').should('be.visible').click()
    }
    GotoFooterlinkAbout() {
        cy.get('.link').eq(0).should('be.visible').and('contain.text', 'About').click()
    }
    GotoFooterlinkPress() {
        cy.get('.link').eq(1).should('be.visible').and('contain.text', 'Press').click()
    }
    GotoFooterlinkLegal() {
        cy.wait(4000)
        cy.get('.link').eq(2).should('be.visible').and('contain.text', 'Legal').click()
        cy.url().should('include', '/legal')
        cy.get('.MuiTypography-h1').contains('Law Enforcement Guidelines').should('be.visible')
    }
    GotoFooterlinkPrivacy() {
        cy.wait(4000)
        cy.get('.link').eq(3).should('be.visible').and('contain.text', 'Privacy Policy').click()
        cy.url().should('include', '/privacy')
        cy.get('.MuiTypography-h1').contains('Privacy Policy').should('be.visible')
    }
    GotoFooterlinkTermsofUse() {
        cy.wait(4000)
        cy.get('.link').eq(4).should('be.visible').and('contain.text', 'Terms of Use').click()
        cy.url().should('include', '/terms')
        cy.get('.MuiTypography-h1').contains('Terms of Use').should('be.visible')
    }
    GotoFooterlinkLivePOlicy() {
        cy.wait(4000)
        cy.get('.link').eq(5).should('be.visible').and('contain.text', 'Live Policy').click()
        cy.url().should('include', '/live-policy')
        cy.get('.MuiTypography-h1').contains('Live Policy').should('be.visible')
    }
    AdsandSponsorshipFooter() {
        cy.get('.link').eq(6).should('be.visible').and('contain.text', 'Ads & Sponsorship').trigger('mouseover')
        cy.get('.MuiTooltip-tooltipPlacementBottom ').contains('For advertising, sponsorship opportunities, or other business inquiries, please reach out to us at').should('exist')
    }
    VerificationFooter(){
        cy.get('.link').eq(7).should('be.visible').and('contain.text', 'Verification').trigger('mouseover')
        cy.get('.MuiTooltip-tooltipPlacementBottom ').contains('For Verification and livestream request, please contact').should('exist')
    }
    FollowSuggestedUser() {
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Suggested for you')
        cy.get('a[href*="/user/"] > .MuiButtonBase-root > span').contains('Follow').should('exist').click({ force: true });
        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You followed @')
        cy.wait(2000)
        cy.get('a[href*="/user/"] > .MuiButtonBase-root > span').contains('Following').should('exist').click({ force: true })
        cy.get('a[href*="/user/"] > .MuiButtonBase-root > span').contains('Unfollow').should('exist').click({ force: true })
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unfollow @');
        cy.get('[class*="MuiTypography-body1"]').contains(/^Unfollow$/).should('be.visible').click();
        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You unfollowed @')
    }
    ValidateUserProfile() {
        cy.get('[id="hoverPopup"] div a[href*="/user/"]').eq(0).should('exist').click({ force: true })//user profile
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/user/')
    }
    SearchIcon(search) {
        cy.get('.MuiIconButton-label').eq(2).should('exist').click({ force: true })
        cy.get('.MuiPaper-elevation0.MuiPaper-rounded').should('exist')
        cy.get('#searchInput').should('exist').type(search)
        cy.wait(2000)
    }
    ValidateSearch() {
        cy.get('.MuiList-root').should('exist').and('contain.text', search)
    }
    InvalidSearch(search) {
        cy.get('.MuiIconButton-label').eq(2).should('exist').click({ force: true })
        cy.get('.MuiPaper-elevation0.MuiPaper-rounded').should('exist')
        cy.get('#searchInput').should('exist').type(search + '{enter}')
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.url().should('include', '/search')
        cy.get('.top-news').contains('Posts').should('exist')
        cy.get('h2').contains(search).should('exist')
    }
}
