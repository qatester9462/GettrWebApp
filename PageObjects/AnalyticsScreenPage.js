export class AnalyticsScreenPage {
    gotoAnalytics() {
        cy.get('a[href*="/analytics"]').should('exist').and('contain.text', 'Analytics').click()
        cy.url().should('include', '/analytics')
        cy.get('.dateItem').contains('Last 30 days').should('exist').click()
    }
    ValidateNewFolowersAnalytics() {
        cy.get('.title').contains('Overview').should('exist')
        cy.get('.header').contains('New followers').should('exist')
        cy.get('.numberBox.row').eq(0).should('exist')
        cy.get('.recharts-responsive-container').eq(0).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(0).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-new_followers').contains('New followers').should('exist')
        cy.get('.text').invoke('text').should('include', 'The number of users you’ve gained following your profile.')
    }
    ValidateImpressionsAnalytics() {
        cy.get('.title').contains('Overview').should('exist')
        cy.get('.header').contains('Impressions').should('exist')
        cy.get('.numberBox.row').eq(1).should('exist')
        cy.get('.recharts-responsive-container').eq(1).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(1).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-impressions').contains('Impressions').should('exist')
        cy.get('.text').invoke('text').should('include', 'Shows how many times your posts were seen by other users.')
    }
    ValidateMentionsAnalytics() {
        cy.get('.title').contains('Overview').should('exist')
        cy.get('.header').contains('Mentions').should('exist')
        cy.get('.numberBox.row').eq(2).should('exist')
        cy.get('.recharts-responsive-container').eq(2).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(2).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-mentions').contains('Mentions').should('exist')
        cy.get('.text').invoke('text').should('include', 'Is when a post contains your username.')
    }
    ValidateProfileViewsAnalytics() {
        cy.get('.title').contains('Overview').should('exist')
        cy.get('.header').contains('Mentions').should('exist')
        cy.get('.numberBox.row').eq(3).should('exist')
        cy.get('.recharts-responsive-container').eq(3).should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(3).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-profile_visits').contains('Profile views').should('exist')
        cy.get('.text').invoke('text').should('include', 'Number of users that have looked at your profile.')
    }
    ValidatePostsAnalytics() {
        cy.get('.title').contains('Overview').should('exist')
        cy.get('.header').contains('Mentions').should('exist')
        cy.get('.numberBox.row').eq(4).should('exist')
        cy.get('.recharts-responsive-container').eq(4).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(4).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-posts').contains('Posts').should('exist')
        cy.get('.text').invoke('text').should('include', 'The number of messages published from you account')
    }
    ValidateGTokCreatedAnalytics() {
        cy.get('.analyticsContainer.vision').should('exist')
        cy.get('.titleBox').contains('GToks').should('exist')
        cy.get('.header').contains('GTok created').should('exist')
        cy.get('.numberBox').eq(6).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(5).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-vision_created').contains('GTok created').should('exist')
        cy.get('.text').invoke('text').should('include', 'Total number of GTok of created.')
    }
    ValidateGTokViewsAnalytics() {
        cy.get('.analyticsContainer.vision').should('exist')
        cy.get('.titleBox').contains('GToks').should('exist')
        cy.get('.header').contains('GTok views').should('exist')
        cy.get('.numberBox').eq(7).should('exist')
        cy.get('.recharts-responsive-container').eq(5).should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(6).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-vision_views').contains('GTok views').should('exist')
        cy.get('.text').invoke('text').should('include', 'Number of views on your GTok.')
    }
    LiveStreamsCreatedAnalytics() {
        cy.get('.titleBox').contains('Livestreams').should('exist')
        cy.get('.header').contains('Livestreams created').should('exist')
        cy.get('.numberBox').eq(8).should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(7).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-livestreams_created').contains('Livestreams created').should('exist')
        cy.get('.text').invoke('text').should('include', 'Total number of livestreams started.')
    }
    LiveStreamsMinutesAnalytics() {
        cy.get('.titleBox').contains('Livestreams').should('exist')
        cy.get('.header').contains('Livestream minutes').should('exist')
        cy.get('.numberBox').eq(9).should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(8).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-livestream_minutes').contains('Livestream minutes').should('exist')
        cy.get('.text').invoke('text').should('include', 'Number of minutes streamed.')
    }
    ViewsPerMinuteAnalytics() {
        cy.get('.titleBox').contains('Livestreams').should('exist')
        cy.get('.header').contains('Views per minute').should('exist')
        cy.get('.numberBox').eq(10).should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(9).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-livestream_views_per_minute').contains('Views per minute').should('exist')
        cy.get('.text').invoke('text').should('include', 'Average number of views per minute.')
    }
    LiveStreamViewsAnalytics() {
        cy.get('.titleBox').contains('Livestreams').should('exist')
        cy.get('.header').contains('Livestream Views').should('exist')
        cy.get('.numberBox').eq(11).should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(10).trigger('mouseover')
        cy.get('.toolTipText1.analyticsIndex-livestream_views').contains('VLivestream Views').should('exist')
        cy.get('.text').invoke('text').should('include', 'Number of views on your livestream.')
    }
    PopularFollowersAnalytics() {
        cy.get('.analyticsContainer.follower').should('exist')// popular followers gained sections
        cy.get('.titleBox').contains('Most popular followers gained').should('exist')
        cy.get('.toolTip').contains('Followers').should('exist')
        cy.get('.header').contains('Total Engagement').should('exist')
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(11).trigger('mouseover')
        cy.get('.toolTipText1').contains('Total Engagement').should('exist')
        cy.get('.text').contains('Total number of likes, comments, shares, and repost on your posts.').should('exist')
    }
    ClickUserProfile() {
        cy.get('.analyticsContainer.follower').should('exist')// popular followers gained sections
        cy.get('.titleBox').contains('Most popular followers gained').should('exist')
        cy.get('a[href*="/user/"]').eq(1).should('exist').click()
        cy.url().should('include', '/user/')
    }
    PopularMediaPosts() {
        cy.get('.analyticsContainer.mediaPosts').should('exist')
        cy.get('.titleBox').contains('Most popular media posts').should('exist')
        cy.get('.toolTip').contains('Posts').should('exist')
        cy.get('.toolTip').contains('Type').should('exist')
        cy.get('.toolTip').contains('Type').should('exist')
        cy.get('.header').contains('Engagement').should('exist')
        cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root').should('be.visible').click()
        cy.get('[class*="postToolTip"] svg[width="25"][height="24"][viewBox="0 0 25 24"]').eq(12).trigger('mouseover')
        cy.get('.toolTipText1').contains('Engagement').should('exist')
        cy.get('.text').contains('Number of likes, comments, shares, and repost on your posts.').should('exist')
        cy.get('.toolTip').contains('Date').should('exist')
    }
    ClickPost() {
        cy.get('.analyticsContainer.mediaPosts').should('exist')
        cy.get('.titleBox').contains('Most popular media posts').should('exist')
        cy.get('.toolTip').contains('Posts').should('exist')
        cy.get('.mediaPostsLink').eq(0).should('exist').click()
        cy.url().should('include', '/post/')
    }
    TopPostAnalytics() {
        cy.get('[class="MuiImageListItem-root"]').eq(0).contains('Top post').should('exist')
        cy.get('.subtitle').eq(0).invoke('text').should('exist')
        cy.get('div[class*="jss"').contains('View this post’s activity').should('exist').click()
        cy.wait(2000)
        cy.get('.MuiPaper-elevation24.MuiPaper-rounded').contains('Post Activity').should('exist')
        cy.get('[id="analyticsPost"]').should('exist')
    }
    ValidateImpressions() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(13).contains('Impressions').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(0).should('exist').click()
        cy.get('.postPopup-impressions').contains('Impressions').should('exist')
        cy.get('.text').contains('The number of times people have viewed your content.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
    ValidateViewedDetails() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(14).contains('Detail expands').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(1).should('exist').click()
        cy.get('.postPopup-view_details').contains('Detail expands').should('exist')
        cy.get('.text').contains('The number of times people have viewed your content in detail.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
    ValidateEngagements() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(15).contains('Engagements').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(2).should('exist').click()
        cy.get('.postPopup-engagements').contains('Engagements').should('exist')
        cy.get('.text').contains('Total number of times a user has interacted with a post. This includes reposts, replies, likes, detail expands and views.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
    TopLiveveAnalytics() {
        cy.get('[class="MuiImageListItem-root"]').eq(1).contains('Top live').should('exist')
        cy.get('.subtitle').eq(1).invoke('text').should('exist')
        cy.get('div[class*="jss"').contains('View this livestream’s activity').should('exist').click()
        cy.wait(2000)
        cy.get('.MuiPaper-elevation24.MuiPaper-rounded').contains('Livestream Activity').should('exist')
        cy.get('[id="analyticsPost"]').should('exist')
    }
    LiveStreamImpressions() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(13).contains('Impressions').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(0).should('exist').click()
        cy.get('.postPopup-impressions').contains('Impressions').should('exist')
        cy.get('.text').contains('The number of times this livestream was viewed on GETTR.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
    LIvestreamViews() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(14).contains('Video views').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(1).should('exist').click()
        cy.get('.postPopup-view_details').contains('Video views').should('exist')
        cy.get('.text').contains('The number of times people watched this livestream.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
    LiveStreamEngagements() {
        cy.get('[class="bottomLineBox"]').should('exist')
        cy.get('.postToolTip').eq(15).contains('Engagements').should('exist')
        cy.get('[class*="exclamation"] svg[viewBox="0 0 24 24"]').eq(2).should('exist').click()
        cy.get('.postPopup-engagements').contains('Engagements').should('exist')
        cy.get('.text').contains('Total number of times a user has interacted with a post. This includes reposts, replies, likes, detail expands and views.').should('exist')
        cy.get('.close').contains('close').should('exist').click()
    }
}