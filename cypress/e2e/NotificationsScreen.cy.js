/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { SignUpPage } from "../../PageObjects/SignUpPage"
import { NotificationsScreenPage } from "../../PageObjects/NotificationsScreenPage"
const loginPage = new LoginPage
const signUpPage = new SignUpPage
const notification = new NotificationsScreenPage
describe('Notification Screen Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password

    beforeEach(() => {
        const prodUrl = Cypress.env('prod');
        cy.visit(prodUrl);
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_Notification_001 -Verify that user is able to goto "Notifications"', () => {
        notification.gotoNotifications()
    })
    it('TC_Notification_002 -Verify that user is able to goto "Livestreams"', () => {
        notification.gotoNotifications()
        notification.ValidateLiveStreams()
    })
    it('TC_Notification_003 -Verify that user is able to "Remove" notification ', () => {
        notification.gotoNotifications()
        notification.ValidateLiveStreams()
        notification.RemoveNotification()
        signUpPage.validateToast('Notification deleted.')
    })
    it('TC_Notification_004 -Verify that user is able to "Turn on/off" notifications', () => {
        notification.gotoNotifications()
        notification.ValidateLiveStreams()
        notification.TurnOnOffNotification()
    })
    it('TC_Notification_005 -Verify that user is able to goto "Polls" page', () => {
        notification.gotoNotifications()
        notification.gotoPolls()
    })
    it('TC_Notification_006 -Verify that user is able to goto "Mentions" page', () => {
        notification.gotoNotifications()
        notification.gotoMentions()
    })
})