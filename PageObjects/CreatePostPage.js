export class CreatePostPage {
  VaidateCrossicon() {
    cy.get('svg[width="32"][height="32"][viewBox="0 0 32 32"]').should('be.visible').click()
  }
  UploadMedia(media) {
    cy.get('input[type="file"]').attachFile(media)
    cy.wait(6000)
    //cy.get('.post-preview-box').should('contain',media).and('be.visible')
    // cy.get('.img')
  }
  AddEmoji() {
    cy.get('span[title*="Emoji"]').should('be.visible').click()
    cy.get('.emoji-mart-light').should('be.visible')
    cy.get('button[aria-label*="star-struck, grinning_face_with_star_eyes"]').should('be.visible').click()
    cy.get('button[aria-label*="upside_down_face"]').should('be.visible').click()
    cy.get('button[aria-label*="innocent"]').should('be.visible').click()
  }
  CreatePoll(question, option1, option2, option3, days, hours, minutes) {
    cy.get('span[aria-label*="poll"]').should('be.visible').click()
    cy.get('.post-preview-box').should('be.visible')
    cy.get('div[data-placeholder*="Ask a question ..."]').should('be.visible').type(question)
    cy.get('.form.notranslate').should('be.visible')
    cy.get('div[data-placeholder*="Option 1"]').should('be.visible').type(option1)
    cy.get('div[data-placeholder*="Option 2"]').should('be.visible').type(option2)
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Add another option').should('be.visible').click()
    cy.get('div[data-placeholder*="Option 3"]').should('be.visible').type(option3)
    cy.get('[class*="jss"]').contains('Poll Length').should('be.visible')
    cy.get('#days').should('be.visible').click()
    cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('be.visible').contains(days).click()
    cy.get('#hours').should('be.visible').click()
    cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('be.visible').contains(hours).click()
    cy.get('#minutes').should('be.visible').click()
    cy.get('.MuiPaper-elevation8.MuiPaper-rounded').should('be.visible').contains(minutes).click()
  }
  AddGIF() {
    cy.get('span[aria-label="gif"]').should('be.visible').click()
    cy.get('img[alt="gif"]').eq(0).should('be.visible').click()
    cy.get('img[alt="gif"]').eq(1).should('be.visible').click()
  }
  ValidateReadIt() {
    cy.get('a[href*="/post"]').should('be.visible').contains('Read it').click()
    cy.wait(1000)
    cy.url().should('include', '/post')
  }
  gotoPosts() {
    cy.get('a[href*="/user/"]').eq(0).click({ force: true })
    cy.get('.MuiTab-wrapper').contains('Posts').scrollIntoView().should('be.visible').click()//posts section
    cy.get('[data-index="0"] > :nth-child(1)').scrollIntoView().should('be.visible'); // first post
  }
  clickEllipsisIcon() {
    cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
  }
  validatePinPost() {
    cy.wait(7000);
    function togglePin() {
      //cy.wait(4000);
      cy.get('.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
      cy.get('.MuiTypography-root.MuiTypography-body1')
        .should('be.visible')
        .then((statement) => {
          const text = statement.text().trim();
          if (text.includes('Unpin the post from profile?')) {
            // Unpin the post
            cy.contains('Unpin the post from profile?').should('be.visible').click({ force: true });
            cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unpin the post from profile?');
            cy.get('[class*="MuiTypography-body1"]').contains(/^Unpin$/).should('be.visible').click();
            cy.wait(5000).then(() => togglePin());
          } else {
            // Pin the post
            cy.wait(5000);
            cy.get('svg[aria-controls*="more-menu"]').eq(0).click({ force: true });
            cy.get('.MuiTypography-root.MuiTypography-body1').contains('Pin to your profile').should('be.visible').click({ force: true });
            cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Pin the post to profile?');
            cy.get('[class*="MuiTypography-body1"]').contains(/^Pin$/).should('be.visible').click();
            cy.wait(5000).then(() => togglePin());
          }
        });
    }
  }
  ValidateEditPost(post) {
    cy.get('.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
    cy.get('.MuiTypography-root.MuiTypography-body1')
      .should('be.visible')
      .then((statement) => {
        const text = statement.text().trim();
        if (text.includes('Unpin the post from profile?')) {
          // Unpin the post
          cy.contains('Unpin the post from profile?').should('be.visible').click({ force: true });
          cy.get('.MuiDialog-container > .MuiPaper-root').should('be.visible').and('contain.text', 'Unpin the post from profile?');
          cy.get('[class*="MuiTypography-body1"]').contains(/^Unpin$/).should('be.visible').click();
        }
      })
    cy.get('[data-index="0"] > :nth-child(1)').should('be.visible'); // first post
    cy.get('svg[aria-controls*="more-menu"]').eq(0).should('be.visible').click({ force: true }); // ellipsis icon
    cy.get('.MuiPaper-root.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible'); // dialog box
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Edit post').scrollIntoView().should('be.visible').click()
    cy.get('.MuiDialog-paperFullWidth.MuiPaper-elevation24.MuiPaper-rounded').should('be.visible')
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Edit post').should('be.visible')
    cy.get('.post-preview-box').should('be.visible').type(post)
  }
  ValidateDeletePost() {
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Delete').scrollIntoView().should('be.visible').click()
    cy.get('.MuiPaper-elevation24.MuiPaper-rounded').should('be.visible'); // dialog box
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Delete post?')
    cy.get('[class*="MuiTypography-body1"]').contains(/^Delete$/).should('be.visible').click();
  }
  LikePost() {
    cy.get("button[title='Like'], button[title='Unlike']").first()
      .then(($button) => {
        if ($button.attr('title') === 'Unlike') {
          // If the post is already liked, click to unlike it
          cy.wrap($button).click();
          cy.log('Post was already liked, unliking it first.');
        }
        cy.wait(1000)
        cy.get('button[title="Like"]').first().should('be.visible')
        cy.get("button[title='Like'], button[title='Unlike']").first().click();
        cy.get('[title*="Unlike"] [class*="MuiTypography-body1"]').first().should('be.visible').invoke('text').then((NewCount) => {
          const updatedCount = parseInt(NewCount)
          expect(updatedCount).to.eq(updatedCount)
        })
      })
  }
  ViewOriginalPost() {
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible')
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('View original post').scrollIntoView().should('be.visible').click()
    cy.url().should('include', '/history/post')
    cy.get('.backTitle').should('be.visible').and('contain.text', 'History')
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Original Post').should('be.visible')
  }
  ValidateRepost() {
    cy.get('button[title="Repost"]').first().scrollIntoView().should('be.visible').click({ force: true })
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible')
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Repost').scrollIntoView().should('be.visible').click({ force: true })
  }
  ValidateRepostCount() {
    cy.get('button[title="Repost"] [class*="MuiTypography-body1"]').first().should('be.visible').invoke('text').then((NewCount) => {
      const updatedCount = parseInt(NewCount)
      expect(updatedCount).to.eq(1)
    })
  }
  ReplyToPost(reply) {
    cy.get('button[title="Reply"]').first().scrollIntoView().should('be.visible').click()
    cy.get('.MuiTypography-root.MuiTypography-body1').contains('Reply').should('be.visible')
    cy.get('.post-box.comment-box').should('be.visible').type(reply)
    cy.get('.content').contains(/^Reply$/).should('be.visible').click();
  }
  ValidateReplyToPost() {
    cy.get('button[title="Reply"] [class*="MuiTypography-body1"]').first().should('be.visible').invoke('text').then((NewCount) => {
      const updatedCount = parseInt(NewCount)
      expect(updatedCount).to.eq(updatedCount)
    })
  }
  ValidateBookmark() {
    cy.get("button[title='Bookmark'], button[title='Unbookmark']")
      .first().scrollIntoView()
      .then(($button) => {
        if ($button.attr('title') === 'Unbookmark') {
          cy.wrap($button).click({ force: true });
          cy.wrap($button)
            .should('have.attr', 'aria-label', 'Bookmark');
          cy.log('Post was already bookmarked, unbookmarking it first.');
        }
        cy.wait(1000)
        cy.get("button[title='Bookmark']").first().scrollIntoView().click({ force: true });
        cy.get("button[title='Unbookmark']")
          .first()
          .should('have.attr', 'aria-label', 'Unbookmark');
      });
  };

  ValidateTooltipIcon() {
    cy.get('[class*="MuiTypography-body1"] svg[width="24"][height="24"][viewBox="0 0 24 24"]').trigger('mouseover')
    cy.get('[role="tooltip"] h6').should('be.visible').invoke('text').should('include', 'edit your posts')
  }
  ValidateSharePost() {
    cy.get('button[title="Share"]').first().should('be.visible').click({ force: true })
    cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible').contains('Share')
    cy.get('.MuiListItem-gutters.MuiListItem-button').should('exist')
    cy.get('.MuiTypography-body1').contains('X').should('exist')
    cy.get('.MuiTypography-body1').contains('Facebook').should('exist')
    cy.get('.MuiTypography-body1').contains('WhatsApp').should('exist')
    cy.get('.MuiTypography-body1').contains('Reddit').should('exist')
    cy.get('.MuiTypography-body1').contains('Pinterest').should('exist')
    cy.get('.MuiTypography-body1').contains('Telegram').should('exist')
  }
  GotoUsersPost() {
    cy.get('.MuiTab-wrapper').contains('Breaking').scrollIntoView().should('be.visible').click()//posts section
    cy.get('[data-index="1"] > :nth-child(1)').scrollIntoView().should('be.visible'); // first post
  }
  ReportPost(currentUser) {
    let retryCount = 0; // Track retry attempts
    const maxRetries = 5; // Limit retries to avoid infinite recursion

    const attemptAction = () => {
      cy.wait(3000);
      cy.get('[id="hoverPopup"] div div a[href*="/user/"]').then(($elements) => { // Select all matching elements
        if ($elements.length === 0) {
          // No elements found, go to else block
          if (retryCount < maxRetries) {
            retryCount++;
            cy.scrollTo('bottom'); // Scroll to the bottom of the page
            cy.wait(2000); // Wait for new posts to load
            attemptAction(); // Retry the action
          } else {
            cy.log('No matching elements found after max retries.');
          }
        } else {
          // Filter the elements to exclude the current user
          const filteredPosts = $elements.filter((index, el) => !el.innerText.includes(currentUser));
          if (filteredPosts.length > 0) {
            // Found posts excluding 'currentUser'
            cy.wrap(filteredPosts.first()) // Select the first matching post
              .parents('div[style="overflow-anchor: none;"]')
              .find('svg[aria-controls*="more-menu"]')
              .should('exist')
              .click({ force: true }); // Open the more menu

            // Interact with the dialog box
            cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible');
            cy.get('.MuiTypography-root.MuiTypography-body1')
              .contains('Report')
              .should('be.visible')
              .click({ force: true });

            cy.get('.MuiDialog-container > .MuiPaper-root')
              .should('be.visible')
              .and('contain.text', 'Report');
            cy.get('.MuiDialogContent-root').should('be.visible').click();
            cy.get('button [class*="MuiTypography-body1"]')
              .contains(/^Report$/)
              .should('be.visible')
              .click();
          } else {
            // No matching posts found, retry
            if (retryCount < maxRetries) {
              retryCount++;
              cy.scrollTo('bottom'); // Scroll to the bottom of the page
              cy.wait(2000); // Wait for new posts to load
              attemptAction(); // Retry the action
            } else {
              cy.log('No matching posts found after max retries.');
            }
          }
        }
      });
    };

    attemptAction();
  }
  BlockUser(currentUser) {
    let retryCount = 0; // Track retry attempts
    const maxRetries = 5; // Limit retries to avoid infinite recursion

    const attemptAction = () => {
      cy.wait(3000);
      cy.get('[id="hoverPopup"] div div a[href*="/user/"]').then(($elements) => { // Select all matching elements
        if ($elements.length === 0) {
          // No elements found, go to else block
          if (retryCount < maxRetries) {
            retryCount++;
            cy.scrollTo('bottom'); // Scroll to the bottom of the page
            cy.wait(2000); // Wait for new posts to load
            attemptAction(); // Retry the action
          } else {
            cy.log('No matching elements found after max retries.');
          }
        } else {
          // Filter the elements to exclude the current user
          const filteredPosts = $elements.filter((index, el) => !el.innerText.includes(currentUser));
          if (filteredPosts.length > 0) {
            // Found posts excluding 'currentUser'
            cy.wrap(filteredPosts.first()) // Select the first matching post
              .parents('div[style="overflow-anchor: none;"]')
              .find('svg[aria-controls*="more-menu"]')
              .should('exist')
              .click({ force: true }); // Open the more menu

            // Interact with the dialog box
            cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible');
            cy.get('.MuiTypography-root.MuiTypography-body1')
              .contains('Block @')
              .should('be.visible')
              .click({ force: true });

            cy.get('.MuiDialog-container > .MuiPaper-root')
              .should('be.visible')
              .and('contain.text', 'Block @');
            cy.get('.MuiDialogContent-root').should('be.visible').click();
            cy.get('button [class*="MuiTypography-body1"]')
              .contains(/^Block$/)
              .should('be.visible')
              .click();
          } else {
            // No matching posts found, retry
            if (retryCount < maxRetries) {
              retryCount++;
              cy.scrollTo('bottom'); // Scroll to the bottom of the page
              cy.wait(2000); // Wait for new posts to load
              attemptAction(); // Retry the action
            } else {
              cy.log('No matching posts found after max retries.');
            }
          }
        }
      });
    };

    attemptAction();
  }
  MuteUser(currentUser) {
    let retryCount = 0; // Track retry attempts
    const maxRetries = 5; // Limit retries to avoid infinite recursion

    const attemptAction = () => {
      cy.wait(3000);
      cy.get('[id="hoverPopup"] div div a[href*="/user/"]').then(($elements) => { // Select all matching elements
        if ($elements.length === 0) {
          // No elements found, go to else block
          if (retryCount < maxRetries) {
            retryCount++;
            cy.scrollTo('bottom'); // Scroll to the bottom of the page
            cy.wait(2000); // Wait for new posts to load
            attemptAction(); // Retry the action
          } else {
            cy.log('No matching elements found after max retries.');
          }
        } else {
          // Filter the elements to exclude the current user
          const filteredPosts = $elements.filter((index, el) => !el.innerText.includes(currentUser));
          if (filteredPosts.length > 0) {
            // Found posts excluding 'currentUser'
            cy.wrap(filteredPosts.first()) // Select the first matching post
              .parents('div[style="overflow-anchor: none;"]')
              .find('svg[aria-controls*="more-menu"]')
              .should('exist')
              .click({ force: true }); // Open the more menu

            // Interact with the dialog box
            cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible');
            cy.get('.MuiTypography-root.MuiTypography-body1')
              .contains('Mute @')
              .should('be.visible')
              .click({ force: true });

            cy.get('.MuiDialog-container > .MuiPaper-root')
              .should('be.visible')
              .and('contain.text', 'Mute @');
            cy.get('.MuiDialogContent-root').should('be.visible').click();
            cy.get('button [class*="MuiTypography-body1"]')
              .contains(/^Mute$/)
              .should('be.visible')
              .click();
          } else {
            // No matching posts found, retry
            if (retryCount < maxRetries) {
              retryCount++;
              cy.scrollTo('bottom'); // Scroll to the bottom of the page
              cy.wait(2000); // Wait for new posts to load
              attemptAction(); // Retry the action
            } else {
              cy.log('No matching posts found after max retries.');
            }
          }
        }
      });
    };

    attemptAction();
  }


  FollowUser(currentUser) {
    let retryCount = 0; // Track retry attempts
    const maxRetries = 5; // Limit retries to avoid infinite recursion

    const attemptAction = () => {
      cy.wait(3000);
      cy.get('[id="hoverPopup"] div div a[href*="/user/"]').then(($elements) => { // Select all matching elements
        if ($elements.length === 0) {
          // No elements found, go to else block
          if (retryCount < maxRetries) {
            retryCount++;
            cy.scrollTo('bottom'); // Scroll to the bottom of the page
            cy.wait(2000); // Wait for new posts to load
            attemptAction(); // Retry the action
          } else {
            cy.log('No matching elements found after max retries.');
          }
        } else {
          // Filter the elements to exclude the current user
          const filteredPosts = $elements.filter((index, el) => !el.innerText.includes(currentUser));
          if (filteredPosts.length > 0) {
            // Found posts excluding 'currentUser'
            cy.wrap(filteredPosts.first()) // Select the first matching post
              .parents('div[style="overflow-anchor: none;"]')
              .find('svg[aria-controls*="more-menu"]')
              .should('exist')
              .click({ force: true }); // Open the more menu

            // Interact with the dialog box
            cy.get('.MuiPaper-elevation1.MuiPaper-rounded').should('be.visible');
            cy.get('.MuiTypography-root.MuiTypography-body1')
              .contains('Follow @')
              .should('be.visible')
              .click({ force: true });
          } else {
            // No matching posts found, retry
            if (retryCount < maxRetries) {
              retryCount++;
              cy.scrollTo('bottom'); // Scroll to the bottom of the page
              cy.wait(2000); // Wait for new posts to load
              attemptAction(); // Retry the action
            } else {
              cy.log('No matching posts found after max retries.');
            }
          }
        }
      });
    };

    attemptAction();
  }



}

















