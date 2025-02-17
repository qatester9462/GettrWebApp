/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { GTokScreenPage } from "../../PageObjects/GTokScreenPage"
import { LiveScreenPage } from "../../PageObjects/LiveScreenPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage
const livescreen = new LiveScreenPage
const gtok = new GTokScreenPage

describe('GTok Screen Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    const username = Cypress.config('users').user5.username
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_GTokScreen_001 - Verify that user is able to goto "GTok" Page', () => {
        gtok.gotoGTok()
    })
    it('TC_GTokScreen_002 - Verify that user is able to "Follow/Unfollow" user', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.ValidateFollowUser()
    })
    it('TC_GTokScreen_003 - Verify that user is able to "Mute" user', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.ValidateMuteUser()
        signUpPage.validateToast('You muted @')
    })
    it('TC_GTokScreen_004 - Verify that user is able to "Block" user', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.ValidateBlockUser()
        signUpPage.validateToast('You blocked @')
    })
    it('TC_GTokScreen_005 - Verify that "Not interested" button is clickable and performing its functionality.', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.ValidateNotInterested()
        signUpPage.validateToast('We will show fewer videos like this.')
    })
    it('TC_GTokScreen_006 - Verify that user is able to "Report" video from explore section.', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.ReportVideo()
        signUpPage.validateToast('Report Submitted')
    })
    it('TC_GTokScreen_007 - Verify that user is able to "Download" video.', () => {
        gtok.gotoGTok()
        gtok.ValidateReelsPost()
        gtok.DownloadVideo()
    })
    it('TC_GTokScreen_008 - Verify that user is able to "Like" video from explore section.', () => {
        gtok.gotoGTok()
        gtok.LikeGTokVideos()
    })
    it('TC_GTokScreen_009 - Verify that user is able to "Comment" on video from explore section.', () => {
        gtok.gotoGTok()
        gtok.ValidateCommentOnVideo('Hey')
    })
    it('TC_GTokScreen_010 - Verify that user is able to "Repost" video from explore section.', () => {
        gtok.gotoGTok()
        gtok.RepostVideo()
        signUpPage.validateToast('Post was reposted.')
    })
    it('TC_GTokScreen_011 - Verify that user is able to "Quote post" video from explore section.', () => {
        gtok.gotoGTok()
        gtok.QuotePost('okay')
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.ValidateReadIt()
    })
    it('TC_GTokScreen_012 - Verify that user is able to send "Tip".', () => {
        gtok.gotoGTok()
        gtok.TipToUser('10 GTR', '123456')
        signUpPage.validateToast('You have tipped 10.00 GTR')
    })
    it('TC_GTokScreen_013 - Verify the "x" icons functionality.', () => {
        gtok.gotoGTok()
        gtok.ValidateCrossIcon()
    })
    it('TC_GTokScreen_014 -Verify that hovering cursor over user"s profile name, Tooltip appears.', () => {
        gtok.gotoGTok()
        gtok.UserProfileTooltip()
    })
})
