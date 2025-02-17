/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage

describe('Create Post Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/')
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_CP_001 -Verify the "Write a Post" functionality.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("Hello World")
        homescreen.ClickPost()
    })
    it('TC_CP_002 Verify that the "x" icon functionality.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("Hello world testing")
        createpost.VaidateCrossicon()

    })
    it('TC_CP_003 -Verify the user is able to add "Media" in post..', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("Testing2")
        createpost.UploadMedia('files/image1.jpg')
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_CP_004 -Verify the user is able to add "Emoji" in post.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("Happy Birthday!")
        createpost.AddEmoji()
        homescreen.ClickPost()
    })
    it('TC_CP_005 -Verify the user is able to Create "Poll" in post.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        createpost.CreatePoll('What is your Hobby?', 'Reading', 'Gardening', 'Sleeping', '1 Day', '0 Hours', '0 Minutes')
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_CP_006 -Verify the user is able to Add "GIF" in post.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost('Testing GETTR')
        createpost.AddGIF()
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_CP_007 -Verify that by clicking on"Read it",it is taking the user to post .', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("i am testing")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.ValidateReadIt()

    })
    it('TC_CP_008 -Verify that user is able to "Pin" the post', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("My new Test")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.validatePinPost()
    })
})









