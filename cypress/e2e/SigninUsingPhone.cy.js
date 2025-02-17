/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"

const loginPage = new LoginPage


describe('Login test cases using email and phone', () => {

  const loginEmail = Cypress.config('users').user1.userEmail
  const loginPassword = Cypress.config('users').user1.password

  it('TC_Login_010 - Verify login with phone using valid phone', () => {
    cy.visit('/')
    const phoneNo = '757 655 1594' //valid number
    loginPage.goToLogin() //Go to login
    loginPage.loginWithPhone(phoneNo) //Login using phone
    cy.verifyToast('Verification code sent. Please check your phone')
    cy.wait(3000)
    loginPage.otpVerification(phoneNo, '123456')
    loginPage.validateError('Sorry, we are not able to verify the code to that phone number. Please make sure you inputted the right password, phone number, and code')
    //cy.verifyToast('Something went wrong. Please try again later')
  })
  it('TC_Login_011 - Verify login with phone using invalid phone', () => {
    cy.visit('/')
    const phoneNo = '000 000 0000' //invalid number
    loginPage.goToLogin() //Go to login
    loginPage.loginWithPhone(phoneNo) //Login using phone
    cy.verifyToast('This number has been rejected')
  
  })
 
})