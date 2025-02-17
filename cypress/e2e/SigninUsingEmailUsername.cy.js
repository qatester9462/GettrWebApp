/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { ReuseableCode } from "../../PageObjects/ReuseableCode"

const signUpPage = new SignUpPage
const reuseableCode = new ReuseableCode
const loginPage = new LoginPage

describe('Login test cases using email and phone', () => {

  const loginEmail = Cypress.config('users').user1.userEmail
  const loginPassword = Cypress.config('users').user1.password
  //using user3 for forgot password case
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
    cy.clearAllSessionStorage()
    cy.visit('/')
  })
  it('TC_Login_001 - Verify login with valid credentials', () => {
    loginPage.goToLogin() //Go to login
    loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
    cy.verifyToast('Welcome back')
  })
  it('TC_Login_002 - Verify login with invalid email format', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword('invalidemailformat@', loginPassword) /
      loginPage.validateError('Please enter a valid email')
  })
  it('TC_Login_003 - Verify login with incorrect password', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword(loginEmail, 'IncorrectPassword')
    loginPage.validateError('Sorry, your username or password is incorrect. Please try again')
    cy.verifyToast('Sorry, your username or password is incorrect. Please try again')
  })
  it('TC_Login_004 - Verify login with unregistered email', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword('unregisteremail@yopmail.com', loginPassword)
    loginPage.validateError('Sorry, your username or password is incorrect. Please try again')
    cy.verifyToast('Sorry, there was no account with that information')
  })
  it('TC_Login_005 - Verify login with blank credentials', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword(null, null)
    loginPage.validateLoginButton('disabled')
  })
  it('TC_Login_006 - Verify login with only email entered', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword(loginEmail, null)
    loginPage.validateError('Sorry, your username or password is incorrect. Please try again')
    cy.verifyToast('Sorry, your email or password is incorrect. You can try again')
  })
  it('TC_Login_007 - Verify login with only password entered', () => {
    loginPage.goToLogin()
    loginPage.loginWithEmailPassword(null, loginPassword)
    loginPage.validateLoginButton('disabled')
  })
  it('TC_Login_008 - Verify "Forgot Password" link functionality', () => {
    const loginEmail = Cypress.config('users').user3.userEmail
    const password = (reuseableCode.getRandomPassword(7))
    loginPage.goToLogin()
    //Forgot password
    loginPage.forgotPassword(loginEmail)
    cy.verifyToast('Verification code sent. Please check your email')
    signUpPage.goToGuerrillaMail(loginEmail)
    signUpPage.verifyGuerrillaMail(loginEmail, '5')
    cy.visit('/')
    loginPage.goToLogin()
    //Forgot password
    loginPage.forgotPassword(loginEmail)
    cy.verifyToast('Verification code sent. Please check your email')
    cy.get('@verificationCode').then(verificationCode => {
      signUpPage.otpVerification(loginEmail, verificationCode)
      loginPage.CreatePassword(password)
    })
  })
})