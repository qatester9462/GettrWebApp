/// <reference types ="cypress" />

import { LoginPage } from "../../PageObjects/LoginPage"
import { MoreFunctionalitiesPage } from "../../PageObjects/MoreFunctionalitiesPage"
import { AnalyticsScreenPage } from "../../PageObjects/AnalyticsScreenPage"
const loginPage = new LoginPage
const more = new MoreFunctionalitiesPage
const analytics = new AnalyticsScreenPage
describe('Analytics Screen Page Test Cases', () => {

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
    it('TC_Analytics_001 -Verify that user is able to goto "Analytics"', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
    })
    it('TC_Analytics_002 -Verify that "New followers" analytics exist in overview section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateNewFolowersAnalytics()
    })
    it('TC_Analytics_003 -Verify that "Impressions" analytics exist in overview section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateImpressionsAnalytics()
    })
    it('TC_Analytics_004 -Verify that "Mentions" analytics exist in overview section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateMentionsAnalytics()
    })
    it('TC_Analytics_005 -Verify that "Profile views" analytics exist in overview section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateProfileViewsAnalytics()
    })
    it('TC_Analytics_006 -Verify that "Posts" analytics exist in overview section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidatePostsAnalytics()
    })
    it('TC_Analytics_007 -Verify that "GTok created" analytics exist in GTok section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateGTokCreatedAnalytics()
    })
    it('TC_Analytics_008 -Verify that "GTok views" analytics exist in GTok section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ValidateGTokViewsAnalytics()
    })
    it('TC_Analytics_009 -Verify that "Livestreams created" analytics exist in Livestreams section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.LiveStreamsCreatedAnalytics()
    })
    it('TC_Analytics_010 -Verify that "Livestream minutes" analytics exist in Livestreams section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.LiveStreamsMinutesAnalytics()
    })
    it('TC_Analytics_011 -Verify that "Views per minute" analytics exist in Livestreams section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ViewsPerMinuteAnalytics()
    })
    it('TC_Analytics_012 -Verify that "Livestream Views" analytics exist in Livestreams section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.LiveStreamViewsAnalytics()
    })
    it('TC_Analytics_013 -Validate "Most popoular followers gained" section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.PopularFollowersAnalytics()
    })
    it('TC_Analytics_014 -Validate user is able to go to folowers "profile"', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ClickUserProfile()
    })
    it('TC_Analytics_015 -Validate "Most popoular media posts" section', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.PopularMediaPosts()
    })
    it('TC_Analytics_016 -Validate that user is able to goto any popular media post', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.ClickPost()
    })
    it('TC_Analytics_017 -Validate Top posts analytics', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopPostAnalytics()
    })
    it('TC_Analytics_018 -Validate Top posts Impressions', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopPostAnalytics()
        analytics.ValidateImpressions()
    })
    it('TC_Analytics_019 -Validate Top posts Views Details', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopPostAnalytics()
        analytics.ValidateViewedDetails()
    })
    it('TC_Analytics_020 -Validate Top posts Engagements', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopPostAnalytics()
        analytics.ValidateEngagements()
    })
    it('TC_Analytics_021 -Validate Top Livestream Analytics', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopLiveveAnalytics()
    })
    it('TC_Analytics_022 -Validate Top Livestream Impressions', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopLiveveAnalytics()
        analytics.LiveStreamImpressions()
    })
    it('TC_Analytics_023 -Validate Top Livestream Video Views', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopLiveveAnalytics()
        analytics.LIvestreamViews()
    })
    it('TC_Analytics_024 -Validate Top Livestream Engagement', () => {
        more.gotoMore()
        analytics.gotoAnalytics()
        analytics.TopLiveveAnalytics()
        analytics.LiveStreamEngagements()
    })
})