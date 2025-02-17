/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { CreatePostPage } from "../../PageObjects/CreatePostPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const createpost = new CreatePostPage
const signUpPage = new SignUpPage

describe('Posts Engagement Test Cases', () => {

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
    it('TC_CP_009 -Verify that user is able to "edit" the post', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("write a post")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.ValidateEditPost(' about World Cup')
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
    })
    it('TC_CP_010 -Verify that user is able to "delete" the post', () => {
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.ValidateDeletePost()
        signUpPage.validateToast('Post deleted successfully')
    })
    it('TC_CP_011 -Verify that user is able to "Like" the post', () => {
        createpost.gotoPosts()
        createpost.LikePost()
    })
    it('TC_CP_012 -Verify that user is able to view "Origional"  post', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("I am testing")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.ValidateEditPost(' GETTR')
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.ViewOriginalPost()
    })
    it('TC_CP_013 -Verify that user is able to "Repost"', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("I am testing2")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.ValidateRepost()
        signUpPage.validateToast('Post was reposted.')
        createpost.gotoPosts()
        createpost.ValidateRepostCount()
    })
    it('TC_CP_014 -Verify that user is able to "Reply" to a post', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("How are You?")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.ReplyToPost('Good')
        signUpPage.validateToast('Your reply was sent.Read it')
        createpost.gotoPosts()
        createpost.ValidateReplyToPost()

    })
    it('TC_CP_015 -Verify that user is able to "BookMark" the post', () => {
        createpost.gotoPosts()
        createpost.ValidateBookmark()
    })
    it('TC_CP_016 -Verify that "tooltip icon" is hoverable.', () => {
        homescreen.ClickCreateButton()
        homescreen.ClickWritePost()
        homescreen.validateWritePost("write a post")
        homescreen.ClickPost()
        signUpPage.validateToast('Your post was sent.Read it')
        createpost.gotoPosts()
        createpost.clickEllipsisIcon()
        createpost.ValidateTooltipIcon()
    })
    it('TC_CP_017 -Verify that user is able to "Share" the post', () => {
        createpost.gotoPosts()
        createpost.ValidateSharePost()
    })
})