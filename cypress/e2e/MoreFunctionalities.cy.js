import { LoginPage } from "../../PageObjects/LoginPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { MoreFunctionalitiesPage } from "../../PageObjects/MoreFunctionalitiesPage"
const loginPage = new LoginPage
const signUpPage = new SignUpPage
const more = new MoreFunctionalitiesPage
describe('More Functionalities Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password

    beforeEach(() => {
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_More_001 -Verify that user is able to go to "More"section in header', () => {
        more.gotoMore()
    })
    it('TC_More_002 -Verify that user is able to active GTR Wallet', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
    })
    it('TC_More_003 -Verify that "forgot pin" text button is functional', () => {
        more.gotoMore()
        more.ValidateForgotPin()
    })
    it('TC_More_004 -Verify that user is able to send "GTR"', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.SendGTR('wenxia', '1', 'testing', '123456')
        signUpPage.validateToast('Your GTR transaction is pending. It will be confirmed shortly.')
    })
    it('TC_More_005 -Verify that user is able to Request "GTR"', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.RequestGTR('gettr_welkin', '1', 'testing')
        signUpPage.validateToast('Request Sent')
    })
    it('TC_More_006 -Validate Pending transactions', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidatePendingTransactions()
    })
    it('TC_More_007 -Validate "Pending transactions"filter is functional ', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.PendingTransactionsFilter('This Week')
        more.ValidatePendingTransactions()
    })
    it('TC_More_008 -Validate posted Transactions ', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidatePostedTransactions('wenxia')
    })
    it('TC_More_009 -Validate "Posted transactions"filter is functional', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.PostedTranscationsFilter('Send', 'All')
        more.ValidatePostedTransactions('wenxia')
    })
    it('TC_More_010 -Validate user is able to "Download" Transactions', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.DownloadTransactions()
        signUpPage.validateToast('File Downloaded Successfully')
    })
    it('TC_More_011 -Validate Reedems flow is functional', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidateRedeem('United States', 'Alabama')
    })
    it('TC_More_012 -Verify that Balance block is visible on Redeems Page', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidateRedeem('United States', 'Alabama')
        more.ValidateBalanceBlock()
    })
    it('TC_More_013 -Verify that Country is visible on Redeems Page', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidateRedeem('United States', 'Alabama')
        more.ValidateCountryBlock()
    })
    it('TC_More_014 -Check that "Arrow buttons" are existing in Most popular section ', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidateRedeem('United States', 'Alabama')
        more.ValidateArrowButtons()
    })
    it('TC_More_015 -Verify that "Sortig filter" is functional ', () => {
        more.gotoMore()
        more.ValidateGETTRPoints('123456')
        signUpPage.validateToast('Wallet logged in successfully')
        more.ValidateRedeem('United States', 'Alabama')
        more.ValidateSortingFilter()

    })
    it('TC_More_016 -Verify Downloading App Buttons exist', () => {
        more.gotoMore()
      more.DownloadAppDialog()

    })
})