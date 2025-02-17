/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"

const loginPage = new LoginPage


describe('Login test cases using QR Code', () => {

  const loginEmail = Cypress.config('users').user1.userEmail
  const loginPassword = Cypress.config('users').user1.password

  it('TC_Login_009 - Verify QR code login functionality', () => {
    cy.visit('/')
    loginPage.goToLogin() //Go to login

    loginPage.clickLoginWithQR()
    loginPage.validateQRmodal()
    loginPage.closeQRModal()
  })
})