import { LoginPage } from "../../PageObjects/LoginPage"
import { ProfileMenuPage } from "../../PageObjects/ProfileMenuPage"
const loginPage = new LoginPage
const profile = new ProfileMenuPage
describe('GETTR Premium Test Cases ', () => {

    const loginEmail = Cypress.config('users').user1.userEmail
    const loginPassword = Cypress.config('users').user1.password
    
    beforeEach(() => {
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_PM_015 -Verify GETTR premium trial', () => {
        profile.ClickOnProfileIcon()
        profile.GETTRPremium()
    })
})