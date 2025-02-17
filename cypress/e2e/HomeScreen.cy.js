/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const homescreen = new HomeScreenPage
const loginPage = new LoginPage
const signUpPage = new SignUpPage
describe('Home Screen Test Cases', () => {

    const loginEmail = Cypress.config('users').user4.userEmail
    const loginPassword = Cypress.config('users').user4.password
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_Homepage_001 - Verify that the user is clickable on the "Create Button"', () => {
        homescreen.ClickCreateButton()
    })
    it('TC_Homepage_002 - Verify that user is able to select  a "Write a post" in a dropdown.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
    })
    it('TC_Homepage_003 - Verify that user is able to type in a selected post.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost('Hello World')
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_Homepage_004 - Verify that user is able to go "Create a Gtok" and post it.', () => {
        homescreen.ClickCreateButton()
        homescreen.createGTok()
        homescreen.uploadfile('files/cloud2.mp4')
    })
    it('TC_Homepage_005 - Verify that user is able to go to "Live"', () => {
        homescreen.gotoLive()
    })
    it('TC_Homepage_006 - Verify that user should be able to click on the "show more" in the Gettr News', () => {
        homescreen.ShowMoreGettrNews()
    })
    it('TC_Homepage_007 - Verify that user is able to go on "Explore" page.', () => {
        homescreen.gotoExplore()
    })
    it('TC_Homepage_008 - Verify that user is able to go on "Following" page.', () => {

        homescreen.gotoFollowing()
    })
    it('TC_Homepage_009 - Verify that user is able to go on "Breaking" page.', () => {

        homescreen.gotoBreaking()
    })
    /*it('TC_Homepage_010 - Verify that user should be able to click on the "show more" in the "Suggested for you" section', () => {
//pending
        homescreen.ShowMoreProfileSuggestion()
    })*/
    it('TC_Homepage_029 - Verify that users appearing in "Following" section are being followed', () => {
        homescreen.gotoFollowing()
        homescreen.ValidateFollowedUsers()
    })
    it('TC_Homepage_030 - Verify that user is able to "Follow/Unfollow" suggested users', () => {
        homescreen.gotoFollowing()
        homescreen.FollowSuggestedUser()
    })
})
