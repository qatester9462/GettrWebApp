/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage

describe('Footer Links Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    beforeEach(() => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_Homepage_015 - Verify that "above" link in footer is functional', () => {
        homescreen.GotoFooterlinkAbout()
    })
    it('TC_Homepage_016 - Verify that "Legal" link in footer is functional', () => {
        homescreen.GotoFooterlinkLegal()
    })
    it('TC_Homepage_017 - Verify that "Privay policy" link in footer is functional', () => {
        homescreen.GotoFooterlinkPrivacy()
    })
    it('TC_Homepage_018 - Verify that "Press" link in footer is functional', () => {
        homescreen.GotoFooterlinkPress()
    })
    it('TC_Homepage_019 - Verify that "Terms of Use" link in footer is functional', () => {
        homescreen.GotoFooterlinkTermsofUse()
    })
    it('TC_Homepage_020 - Verify that "Live Policy" link in footer is functional', () => {
        homescreen.GotoFooterlinkLivePOlicy()
    })
    it('TC_Homepage_033 - Verify that "Ads and Sponsorship" in footer is showing message by hoverig cursor over it', () => {
        homescreen.AdsandSponsorshipFooter()
    })
    it('TC_Homepage_034 - Verify that "Verifiaction" in footer is showing message by hoverig cursor over it', () => {
        homescreen.VerificationFooter()
    })
})