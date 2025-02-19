/// <reference types ="cypress" />

import { SignUpPage } from "../../PageObjects/SignUpPage"
import { ReuseableCode } from "../../PageObjects/ReuseableCode"

const signUpPage = new SignUpPage
const reuseableCode = new ReuseableCode

const day = '18'
const month = 'March'
const year = '1975'
describe('SignUp Cases', () => {

    const signUpName = Cypress.config('users').user4.userEmail
    const signUpPassword = Cypress.config('users').user4.password
    const email = (reuseableCode.generateRandomString(12) + '@guerrillamail.com')
    const username = (reuseableCode.generateRandomString(5))
    const password = (reuseableCode.getRandomPassword(7))
    beforeEach(() => {
        cy.visit('/')
    })
    it('TC_SignUp_001 - Verify SignUp functionality', () => {
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(email, month, day, year)
        /* signUpPage.goToYopmail(email)
         signUpPage.verifyYopmailEmail(email, '5') //max attempt
         cy.visit('/')
         signUpPage.goToSignUp()
         signUpPage.clickSignupWithEmailPhone()
         signUpPage.signupWithEmail(email, month, day, year)
         cy.get('@verificationCode').then(verificationCode => {
             signUpPage.otpVerification(email, verificationCode)
         })*/
        signUpPage.goToGuerrillaMail(email)
        signUpPage.verifyGuerrillaMail(email, '5')
        cy.visit('/')
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(email, month, day, year)
        cy.get('@verificationCode').then(verificationCode => {
            signUpPage.otpVerification(email, verificationCode)
            signUpPage.CreateUsernameAndPassword(username, password)
            signUpPage.gotoInterests()
            signUpPage.validateToast('Account created.')

        })
    })
    it('TC_SignUp_002 - Verify SignUp with already registered email', () => {
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(signUpName, month, day, year)
        signUpPage.goToGuerrillaMail(signUpName)
        signUpPage.verifyGuerrillaMail(signUpName, '5')
        cy.visit('/')
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(signUpName, month, day, year)
        cy.get('@verificationCode').then(verificationCode => {
            signUpPage.otpVerification(signUpName, verificationCode)
            signUpPage.validateToast('This email is already registered. Please log in or reset your password.')
        })
    })
    it('TC_SignUp_003 - Validate password validation during singup', () => {
        const password = (reuseableCode.getRandomPassword(2))
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(email, month, day, year)
        signUpPage.goToGuerrillaMail(email)
        signUpPage.verifyGuerrillaMail(email, '5')
        cy.visit('/')
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(email, month, day, year)
        cy.get('@verificationCode').then(verificationCode => {
            signUpPage.otpVerification(email, verificationCode)
            signUpPage.CreateUsernameAndPassword(username, password)
            signUpPage.validateError('Password should be at least 6 characters.')
        })
    })
    it('TC_SignUp_004 - Verify signup with missing required fields', () => {
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(null, month, day, year)
    })
    it('TC_SignUp_006 - Verify signup with invalid email format', () => {
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail('!123@.com', month, day, year)
        signUpPage.validateEmailError('Invalid email.')
    })
    it('TC_SignUp_007 -Verify email confirmation after signup', () => {
        signUpPage.goToSignUp()
        signUpPage.clickSignupWithEmailPhone()
        signUpPage.signupWithEmail(email, month, day, year)
        //signUpPage.validateToast('Verification code sent. Please check your eamil.')
        signUpPage.goToGuerrillaMail(email)
        signUpPage.verifyEmailConfirmation(email, '5')
      
    })
})
