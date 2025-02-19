import { LoginPage } from "../../PageObjects/LoginPage"
import { ProfileMenuPage } from "../../PageObjects/ProfileMenuPage"
import { SettingsPage } from "../../PageObjects/SettingsPage"
const loginPage = new LoginPage
const profile = new ProfileMenuPage
const settings = new SettingsPage

describe('Settings Page Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password
    
    beforeEach(() => {
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_PM_016 -Verify that user is able to goto "Settings"', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
    })
    it('TC_PM_017 -Verify Account information settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.ValidateAccountInfo()
    })
    it('TC_PM_018 -Verify that Multiple Languages are appearing in Language(Setting)', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.LanguageSettings()
    })
    it('TC_PM_019 -Verify Display Settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.DisplaySetting()
    })
    it('TC_PM_020 -Verify user is able to goto Privacy settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
    })
    it('TC_PM_021 -Verify that Muted users exist in Mute settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
        settings.ValidateMutedUsers()
    })
    it('TC_PM_022 -Verify that Blocked users exist in Block settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
        settings.ValidateBlockedUsers()
    })
    it('TC_PM_023 -Verify direct Message setting', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
        settings.DirectMessageSetting()
    })
    it('TC_PM_024 -Verify Interests settings', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
        settings.ValidateInterests()
    })
    it('TC_PM_025 -Verify GTok safe mode', () => {
        profile.ClickOnProfileIcon()
        settings.gotoSettings()
        settings.PrivacySetting()
        settings.GTokSafeMode()
    })
})