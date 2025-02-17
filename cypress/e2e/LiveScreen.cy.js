/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { HomeScreenPage } from "../../PageObjects/HomeScreenPage"
import { LiveScreenPage } from "../../PageObjects/LiveScreenPage"
const loginPage = new LoginPage
const homescreen = new HomeScreenPage
const livescreen = new LiveScreenPage
describe('Live Screen Page Test Cases', () => {

    const loginEmail = Cypress.config('users').user5.userEmail
    const loginPassword = Cypress.config('users').user5.password

    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        //const prodUrl = Cypress.env('prod');
        cy.visit('/');
        loginPage.goToLogin() //Go to login
        loginPage.loginWithEmailPassword(loginEmail, loginPassword) //Login using email password
        cy.verifyToast('Welcome back')
    })
    it('TC_LiveScreen_001 - Verify that user is able to goto "Live" Page', () => {
        livescreen.gotoLivePage()
    })
    it('TC_LiveScreen_002 -verify that "Sort by Hottest" filter is functional', () => {
        livescreen.gotoLivePage()
        livescreen.SortByHottest()
    })
    it('TC_LiveScreen_003 -verify that "Sort by Recently started" filter is functional', () => {
        livescreen.gotoLivePage()
        livescreen.SortByRecentlyStarted()
    })
    it('TC_LiveScreen_004 -Verify that user is able to delete Live video from history', () => {
        livescreen.gotoLivePage()
        livescreen.gotoHistory()
        livescreen.DeleteHistoryVideo()
        livescreen.validateToast('History deleted successfully')
    })
    it('TC_LiveScreen_005 -Verify that user is able to Follow/Unfollow user', () => {

        livescreen.gotoLivePage()
        livescreen.gotoHistory()
        livescreen.clickEllipsisIcon()
        livescreen.FollowUser()
    })
    it('TC_LiveScreen_006 -Verify that user is able to Share live video from history', () => {
        livescreen.gotoLivePage()
        livescreen.gotoHistory()
        livescreen.clickEllipsisIcon()
        livescreen.SharePost()
    })
    it('TC_LiveScreen_007 -Verify that user is able to see all the followed hosts', () => {
        livescreen.gotoLivePage()
        livescreen.FollowedHosts()
    })
    it('TC_LiveScreen_008 -Verify that user is able to see all the Recommended hosts', () => {
        livescreen.gotoLivePage()
        livescreen.RecommendedHosts()
    })
    it('TC_LiveScreen_009 -Verify that user is able to search in the search bar of History', () => {
        livescreen.gotoLivePage()
        livescreen.gotoHistory()
        livescreen.HistorySearchBar('live')
    })
    it('TC_LiveScreen_010 -Verify that user is able to Host Live', () => {
       homescreen.ClickCreateButton()
       livescreen.clickGoLive()
       livescreen.CreateLiveStream()
    })
})