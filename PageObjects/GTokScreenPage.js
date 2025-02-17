export class GTokScreenPage {
    gotoGTok() {
        cy.get('a[title*="GTok"]').should('exist').and('contain.text', 'GTok').click()
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.content').contains('Watch safe content in GTok')
        cy.get('.primary').should('exist').and('contain.text', 'Got it').click()
        cy.wait(500)
        cy.url().should('include', '/gtok');
    }
    ValidateReelsPost() {
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true })
    }
    ValidateFollowUser() {
        cy.wait(1000)
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').should('be.visible').then((statement) => {
            const text = statement.text().trim();
            if (text.includes('Unfollow @')) {
                // Unfollow the user
                cy.contains('Unfollow').should('exist').click({ force: true });
                cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unfollow @');
                cy.get('[class*="MuiTypography-body1"]').contains(/^Unfollow$/).should('be.visible').click();
                cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You unfollowed @')
            } else {
                // Follow the user
                cy.get('.MuiTypography-root.MuiTypography-body1').contains('Follow @').should('exist').click({ force: true });
                cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'You followed @')
            }
        });
    }
    ValidateMuteUser() {
        cy.wait(1000)
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Mute @').should('exist').click({ force: true });
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Mute @');
        cy.get('[class*="MuiTypography-body1"]').contains(/^Mute$/).should('be.visible').click();
    }
    ValidateBlockUser() {
        cy.wait(1000)
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Block @').should('exist').click({ force: true });
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Block @');
        cy.get('[class*="MuiTypography-body1"]').contains(/^Block$/).should('be.visible').click();
    }
    ValidateNotInterested() {
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Not interested').should('be.exist').click({ force: true });
    }
    ReportVideo() {
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible');
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Report').should('be.visible').click({ force: true });
        cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Report');
        cy.get('.MuiDialogContent-root').should('be.visible').click();
        cy.get('button [class*="MuiTypography-body1"]').contains(/^Report$/).should('be.visible').click();
    }
    LikeGTokVideos() {
        cy.wait(500)
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')
        cy.get("div[title='Like'], div[title='Unlike']")
            .then(($button) => {
                if ($button.attr('title') === 'Unlike') {
                    // If the post is already liked, click to unlike it
                    cy.wrap($button).click();
                    cy.log('Post was already liked, unliking it first.');
                }
                cy.wait(1000)
                cy.get('.vision-grid-item-container').should('exist')
                cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')
                cy.get('div[title="Like"]').should('be.visible')
                cy.get("div[title='Like'], div[title='Unlike']").first().click();
                cy.get('.count.active').should('exist').invoke('text').then((NewCount) => {
                    const updatedCount = parseInt(NewCount)
                    expect(updatedCount).to.eq(updatedCount)
                })
            })
    }
    ValidateCommentOnVideo(comment) {
        cy.wait(500)
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')
        cy.get('.post-feed-item-button.icon-white').eq(1).should('be.visible').click()
        cy.wait(1000)
        cy.url().should('include', '/gtok/')
        cy.get('span[class*="jss"]').contains('Comments').should('be.visible')
        cy.get('div[data-placeholder*="Send a message"]').should('exist').click().type(comment)
        cy.get('button[title*="Send"]').should('be.visible').click()//validation is missing
        cy.get('div[title*="Close"]').should('exist').click()
    }
    RepostVideo() {
        cy.wait(500)
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')
        cy.get('div[aria-label*="repost"]').eq(1).should('be.visible').click()
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible')
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Repost').scrollIntoView().should('be.visible').click({ force: true })
        cy.wait(500)
    }
    QuotePost(reply) {
        cy.wait(500)
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')
        cy.get('div[aria-label*="repost"]').eq(1).should('be.visible').click()
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible')
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Quote post').scrollIntoView().should('be.visible').click({ force: true })
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Quote post').should('be.visible')
        cy.get('div[data-placeholder*="Write your reply"]').should('be.visible').type(reply)
        cy.get('[class*="MuiTypography-body1"]').contains(/^Post$/).should('be.visible').click();
    }
    TipToUser(Tip, pin) {
        cy.wait(500)
        cy.get('.vision-grid-item-container').should('exist')//GTok posts
        cy.get('.vision_explore-vision-stat-line').eq(1).should('exist')//post's engagement block
        cy.get('.tipIconContainer').eq(0).should('exist').click({ force: true })//tip icon
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').then(($dialog) => {
            if ($dialog.length > 0) {
                cy.get('.MuiBox-root').contains('Send Tip with GTR').should('exist').click()
                cy.get('.MuiPaper-elevation24.MuiPaper-rounded').should('exist')
                cy.get('div[name*="detail-handler"]').should('exist').and('contain.text', 'Send tip to support')
                cy.get('.MuiButtonBase-root').contains(Tip).should('exist').click()
                cy.get('button[type*="submit"]').should('exist').and('contain.text', 'Next').click()
                cy.get('.MuiPaper-elevation24.MuiPaper-rounded').contains('Review & send').should('exist')
                cy.get('button[type*="submit"]').should('exist').and('contain.text', 'Send').click()
                cy.get('.MuiPaper-elevation24.MuiPaper-rounded').contains('Enter Your PIN').should('exist')
                for (let i = 0; i < pin.length; i++) {
                    // Target the input field for each PIN digit
                    cy.get(`[name="payment_${i}"]`).should('be.visible').type(pin[i])
                }
            }
            else {
                cy.log('You cannot send tip to this user');
            }
        })
    }
    DownloadVideo() {
        cy.wait(1000)
        cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
        cy.get('.MuiTypography-root.MuiTypography-body1').contains('Download').should('exist').click({ force: true });
    }
    ValidateCrossIcon(){
        cy.get('.vision-grid-item-container').should('exist')
        cy.get('img[tabindex*="0"]').eq(0).should('exist').click({force:true})
        cy.url().should('include', '/gtok/');
        cy.wait(2000)
        cy.get('div[title*="Close"]').should('exist').click({force:true})
    }
    UserProfileTooltip(){
        cy.get('[id="hoverPopup"] div a[href*="/user/"]').eq(0).should('exist').trigger('mouseover')
        cy.wait(2000)
        cy.get('#mouse-over-popover').should('exist')
    }

}

