/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { MessagesScreenPage } from "../../PageObjects/MessagesScreenPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage
const messages = new MessagesScreenPage

describe('Messages Screen Test Cases', () => {
    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    const username = Cypress.config('users').user5.username
    beforeEach(() => {

    })
    it('TC_MessagesScreen_001 - Verify that user is able to goto "Messages" Page', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
    })
    it('TC_MessagesScreen_002 - Verify that user is able to send "Messages"', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.TypeMessage('Hello!')
        messages.ClickOnSendButton()
    })
    it('TC_MessagesScreen_003 - Verify that user is able to add "Emojis" in the messages', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.TypeMessage('Congratulations')
        createpost.AddEmoji()
        messages.ClickOnSendButton()
    })
    it('TC_MessagesScreen_004 - Verify that user is able to add "GIF" in the messages', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.SendGIF()
    })
    it('TC_MessagesScreen_005 - Verify that user is able to add Attachments in the messages', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        createpost.UploadMedia('files/image1.jpg')
        cy.wait(2000)
        messages.ClickOnSendButton()
    })
    it('TC_MessagesScreen_006 - Verify "Direct Message" settings', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.ClickOnEllipsisIcon()
        messages.ValidateDMsettings('People you follow')
    })
    it('TC_MessagesScreen_007 - Verify user is able to send"Stickers"', () => {
        const prodUrl = Cypress.env('prod');
        cy.visit(prodUrl);
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.AddStickers()
    })
    it('TC_MessagesScreen_008 - Verify user is able to create a "New chat"', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.CreateNewChat('gettr', 'GETTR')
    })
    it('TC_MessagesScreen_009 - Verify user is able to Delete chat', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.CreateNewChat('gettr', 'GETTR')
        messages.DeleteChat()
    })
    it('TC_MessagesScreen_010 - Verify user is able to Forward message', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.ForwardMessage('sqa')
        signUpPage.validateToast('Message has been forwarded')
    })
    it('TC_MessagesScreen_011 - Verify user is able to Delete message', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.DeleteMessage()
    })
    it('TC_MessagesScreen_012 - Verify user is able to create a "New Group"', () => {
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
        messages.gotoMessages()
        messages.CreateNewGroup('SQA')
    })
})