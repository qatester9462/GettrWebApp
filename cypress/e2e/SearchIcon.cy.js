/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
describe('Search icon Test Cases', () => {
    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    const username = Cypress.config('users').user5.username
    beforeEach(() => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_Homepage_031 -Verify Search with Valid Input', () => {
        homescreen.SearchIcon('test')
        homescreen.ValidateSearch()
    })
    it('TC_Homepage_032 -Verify Search with Invalid Input', () => {
        homescreen.InvalidSearch('invalid search')
    })
})