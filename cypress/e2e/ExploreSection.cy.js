/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const homescreen = new HomeScreenPage
const loginPage = new LoginPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage
describe('Explore Section Test Cases', () => {

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
    it('TC_Homepage_025 - Verify the functionality of the "Follow" button on the Explore Section posts', () => {
        homescreen.gotoExplore()
        createpost.FollowUser(username)
        signUpPage.validateToast('You followed @')
    })
    it('TC_Homepage_026 - Verify the functionality of the "Mute" button on the Expllre section posts', () => {
        homescreen.gotoExplore()
        createpost.MuteUser(username)
        signUpPage.validateToast('You muted @')
    })
    it('TC_Homepage_027 - Verify the functionality of the "Block" button on the Explore section posts', () => {
        homescreen.gotoExplore()
        createpost.BlockUser(username)
        signUpPage.validateToast('You blocked @')
    })
    it('TC_Homepage_028 - Verify that user is able to "Report" post in the explore section', () => {
        homescreen.gotoExplore()
        createpost.ReportPost(username)
        signUpPage.validateToast('Report Submitted')
    })
    it('TC_CP_024 -Verify that user is able to "Like" the post in the explore section', () => {
        createpost.gotoPosts()
        createpost.LikePost()
    })
    it('TC_CP_025 -Verify that user is able to "Repost" any post from explore section', () => {
        createpost.gotoPosts()
        createpost.ValidateRepost()
        signUpPage.validateToast('Post was reposted.')
        createpost.gotoPosts()
        createpost.ValidateRepostCount()
    })
    it('TC_CP_026 -Verify that user is able to "BookMark" the post in the explore section', () => {
        createpost.gotoPosts()
        createpost.ValidateBookmark()
    })
    it('TC_CP_027 -Verify that user is able to "Share" the post form explores section', () => {
        createpost.gotoPosts()
        createpost.ValidateSharePost()
    })
    it('TC_CP_028 -Verify that user is able to "Reply" to a post from the explore section', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("How is your day going?")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.ReplyToPost('Fine')
        signUpPage.validateToast('Your reply was sent.Read it')
        createpost.gotoPosts()
        createpost.ValidateReplyToPost()
    })
    it('TC_CP_016 -Verify the user is able to redirect from the following page to the user profile visible in the following section.', () => {
        homescreen.gotoExplore()
        homescreen.ValidateUserProfile()

    })
})