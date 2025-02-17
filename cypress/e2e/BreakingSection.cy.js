/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const homescreen = new HomeScreenPage
const loginPage = new LoginPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage
describe('Breaking section Test Cases', () => {

    const loginEmail = Cypress.config('users').user1.userEmail
    const loginPassword = Cypress.config('users').user1.password
    const username = Cypress.config('users').user1.username
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_Homepage_011 - Verify the functionality of the "Follow" button on the Breaking page posts', () => {
        homescreen.gotoBreaking()
        createpost.FollowUser(username)
        signUpPage.validateToast('You followed @')
    })
    it('TC_Homepage_012 - Verify the functionality of the "Mute" button on the Breaking page posts', () => {
        homescreen.gotoBreaking()
        createpost.MuteUser(username)
        signUpPage.validateToast('You muted @')
    })
    it('TC_Homepage_013 - Verify the functionality of the "Block" button on the Breaking page posts', () => {
        homescreen.gotoBreaking()
        createpost.BlockUser(username)
        signUpPage.validateToast('You blocked @')
    })
    it('TC_Homepage_014 - Verify that user is able to "Report" post', () => {
        homescreen.gotoBreaking()
        createpost.ReportPost(username)
        signUpPage.validateToast('Report Submitted')
    })
})

















