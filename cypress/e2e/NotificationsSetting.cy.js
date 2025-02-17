import { LoginPage } from "../../PageObjects/LoginPage"
import { ProfileMenuPage } from "../../PageObjects/ProfileMenuPage"
import { SettingsPage } from "../../PageObjects/SettingsPage"
const loginPage = new LoginPage
const profile = new ProfileMenuPage
const settings = new SettingsPage

describe('Notifications Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_PM_026 -Verify that user is able to goto "Notifications"', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
    })
    it('TC_PM_027 -Verify Repost and Quotes Notification settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
        settings.RepostAndQuotes()
    })
    it('TC_PM_028 -Verify Mentions Notification settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
        settings.MentionsSetting()
    })
    it('TC_PM_029 -Verify Replies notification settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
        settings.RepliesSetting()
    })
    it('TC_PM_030 -Verify Likes notification settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
        settings.LikesSetting()
    })
    it('TC_PM_031 -Verify New folowers settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.NotificationSetting()
        settings.NewFollowersSetting()
    })
})