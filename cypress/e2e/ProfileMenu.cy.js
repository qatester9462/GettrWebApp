import { LoginPage } from "../../PageObjects/LoginPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { ProfileMenuPage } from "../../PageObjects/ProfileMenuPage"
import { ReuseableCode } from "../../PageObjects/ReuseableCode"
const loginPage = new LoginPage
const signUpPage = new SignUpPage
const profile = new ProfileMenuPage
const reuseableCode = new ReuseableCode

describe('Profile Menu Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    const string = (reuseableCode.generateRandomString(3))

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_PM_001 -Verify that user is able to Click on "Profile icon"', () => {
        profile.ClickOnProfileIcon()
    })
    it('TC_PM_002 -Validate that Profiles basic tabs exists and their corresponding functioanlities are functional', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateProfile()
    })
    it('TC_PM_003 -Verify that user is able to "Edit Profile"', () => {
        profile.ClickOnProfileIcon()
        profile.EditProfile('User Bio ', string)
        signUpPage.validateToast('Your profile was saved.')
    })
    it('TC_PM_004 -Verify that user is able to "search"', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateSearchIcon('test')
    })
    it('TC_PM_005 -Validate that suggested users tab exists', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateSuggetsedUsers()
    })
    it('TC_PM_006 -Validate that user is able to pin livestream post to profile', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateLiveTab()
        profile.PinLivestream()
        signUpPage.validateToast('Your post was pinned to your profile')
    })
    it('TC_PM_007 -Verify that user is able to unpin livestream post from profile', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateLiveTab()
        profile.PinLivestream()
        signUpPage.validateToast('Your post was pinned to your profile')
        profile.UnpinLivestream()
        signUpPage.validateToast('Your post was unpinned from your profile')
    })
    it('TC_PM_008 -Verify that user is able to Edit Livestream details', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateLiveTab()
        profile.EditLivestreamDetails(" 123")
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_PM_009 -Verify that posts appearing in Likes tabs are liked', () => {
        profile.ClickOnProfileIcon()
       profile.VlidateLikesTab()
    })
    it('TC_PM_010 -Verify Switching account setings', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateSwitchAccount()
    })
    it('TC_PM_011 -Verify that Bookmarked posts are appearing in Bookmarks(Setting) ', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateBookmarks()
    })
    it('TC_PM_012 -Verify Language exist in profile dropdown', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateLanguages()
    })
    it('TC_PM_013 -Validate that user is able to turn on Dark mode', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateDarkMode()
    })
    it('TC_PM_014 -Verify themes exist in profile dropdown ', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateTheme()
    })
    it('TC_PM_032 -Validate that user is able to Log out', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateLogout()
    })
    it('TC_PM_033 -Validate that user is able to edit gtok cover from video', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateGtokTab()
        profile.EditCoverFromVideo()
        signUpPage.validateToast('Saved.')
    })
    it('TC_PM_034 -Validate that user is able to edit gtok cover from Image', () => {
        profile.ClickOnProfileIcon()
        profile.ValidateGtokTab()
        profile.EditCoverFromImage('files/image1.jpg')
        signUpPage.validateToast('Saved.')
    })
    
})