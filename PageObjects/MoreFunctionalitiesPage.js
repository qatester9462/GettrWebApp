export class MoreFunctionalitiesPage {
    gotoMore() {
        cy.get('button[title*="More"]').contains('More').should('exist').click()
        cy.get('.MuiPaper-rounded').should('exist')
    }
    ValidateGETTRPoints(pin) {
        cy.get('a[title*="GETTR Points"]').should('exist').and('contain.text', 'GETTR Points').click()
        cy.url().should('include', '/wallet/activation')
        cy.wait(2000)
        cy.get('.MuiGrid-container').contains('Login to GETTR Points').should('exist')
        for (let i = 0; i < pin.length; i++) {
            // Target the input field for each PIN digit
            cy.get(`[name="login_${i}"]`).should('be.visible').type(pin[i])
        }
        cy.get('button[type*="submit"]').should('exist').and('contain.text', 'Continue').click()
        cy.wait(2000)
        cy.url().should('include', '/wallet/GTR')
    }
    ValidateForgotPin() {
        cy.get('a[title*="GETTR Points"]').should('exist').and('contain.text', 'GETTR Points').click()
        cy.url().should('include', '/wallet/activation')
        cy.get('.MuiGrid-container').contains('Login to GETTR Points').should('exist')
        cy.get('.forgotPin').should('exist').and('contain.text', 'Forgot PIN?').click()
        cy.get('.MuiPaper-rounded').contains('Verify Account').should('exist')
    }
    SendGTR(name, GTR, message, pin) {
        cy.get('.wallet-container').contains('GETTR Points').should('exist')
        cy.get('.lower-section').should('exist')
        cy.get('.features').contains('Send').should('exist').click()
        cy.get('.dialogContainer').contains('Send').should('exist')
        cy.get('.detail-container').should('exist')
        cy.get('input[placeholder*=" "]').eq(1).should('exist').type(name)
        cy.get('div[data-index*="0"]').should('exist').click()
        cy.get('.content').should('exist')
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('input[placeholder*="0"]').should('exist').type(GTR)
        cy.get('input[name*="description"]').should('exist').type(message)
        cy.get('button[type*="submit"]').contains('Send').should('exist').click()
        cy.get('.dialogContainer').contains('Review & Send').should('exist')
        for (let i = 0; i < pin.length; i++) {
            // Target the input field for each PIN digit
            cy.get(`[name="payment_${i}"]`).should('be.visible').type(pin[i])
        }
        cy.get('.defaultLoaderWrapper').should('not.exist')
    }
    RequestGTR(name, GTR, message) {
        cy.get('.wallet-container').contains('GETTR Points').should('exist')
        cy.get('.lower-section').should('exist')
        cy.get('.features').contains('Request').should('exist').click()
        cy.get('.dialogContainer').contains('Request transfer').should('exist')
        cy.get('.detail-container').should('exist')
        cy.get('input[placeholder*=" "]').eq(1).should('exist').type(name)
        cy.get('div[data-index*="0"]').should('exist').click()
        cy.get('.content').should('exist')
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('input[placeholder*="0"]').should('exist').type(GTR)
        cy.get('input[name*="description"]').should('exist').type(message)
        cy.get('button[type*="submit"]').contains('Send Transfer Request').should('exist').click()
    }
    ValidatePendingTransactions() {
        cy.get('div[class*="jss"] div').contains('Pending Transactions').should('exist')
        cy.get('[href="/wallet/GTR"]').eq(1).should('exist')
        cy.get('.status').contains('Pending').should('exist')
    }
    PendingTransactionsFilter(type) {
        cy.wait(3000)
        cy.get('[title="Filter"]').eq(1).should('exist').click()
        cy.get('div[role*="dialog"]').contains('Filter').should('exist')
        cy.get('.button-container').contains(type).should('exist').click()
        cy.get('[type*="button"]').contains('Apply').should('exist').click()
    }
    ValidatePostedTransactions(name) {
        cy.get('div[class*="jss"]').contains('Posted Transactions').should('exist')
        cy.get('input[placeholder*="Search Username or Transaction ID"]').should('exist').type(name)
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('[class="description-container"] [class="txnHeading"]').contains(name).should('exist')
    }
    PostedTranscationsFilter(type, status) {
        cy.wait(5000)
        cy.get('[title="Filter"]').eq(0).should('exist').click()
        cy.get('div[role*="dialog"]').contains('Filter').should('exist')
        cy.get('.title-type').contains('Type').should('exist')
        cy.get('.button-container').eq(0).contains(type).should('exist').click()
        cy.get('.title-status').contains('Status').should('exist')
        cy.get('.button-container').eq(1).contains(status).should('exist').click()
        cy.get('[type*="button"]').contains('Apply').should('exist').click()
    }
    DownloadTransactions() {
        cy.wait(5000)
        cy.get('.filters-container').should('exist')
        cy.get('svg[width="20"][height="21"][viewBox="0 0 20 21"]').should('exist').click()
    }
    ValidateRedeem(country, state) {
        cy.get('.wallet-container').contains('GETTR Points').should('exist')
        cy.get('.lower-section').should('exist')
        cy.get('.features').contains('Redeem').should('exist').click()
        cy.get('[role*="dialog"]').contains('Select country and state of residence').should('exist')
        cy.get('.country').eq(0).contains('Country').should('exist')
        cy.get('[id="rfs-btn"]').should('exist').click()
        cy.get('[role*="listbox"]').should('exist')
        cy.get('[placeholder="Search"]').eq(0).should('exist').type(country)
        cy.get('[role="option"]').contains(country).click()
        cy.get('.country').eq(1).contains('State').should('exist')
        cy.get('div[class*="jss"] span').contains(state).should('exist').click()
        cy.get('#state-menu').should('exist')
        cy.get('[placeholder="Search"]').should('exist').type(state)
        cy.get('button span').contains(state).click()
        cy.get('[type*="submit"]').contains('Confirm').should('exist').click()
        cy.get('.dialogContainer').contains('Please confirm you have selected United States and Alabama your place of residence.').should('exist')
        cy.get('[type*="submit"]').contains('Confirm').should('exist').click()
        cy.url().should('include', '/wallet/redeem')
        cy.get('.MuiBox-root').contains('Redeem').should('exist')
    }
    ValidateBalanceBlock() {
        cy.get('.MuiBox-root').contains('Redeem').should('exist')
        cy.get('.balance').contains('Balance').should('exist')
    }
    ValidateCountryBlock() {
        cy.get('.MuiBox-root').contains('Redeem').should('exist')
        cy.get('.balance').contains('Country').should('exist')
    }
    ValidateArrowButtons() {
        cy.get('.slideArrow').should('exist')
    }
    ValidateSortingFilter() {
        cy.get('.title-container').contains('Browse').should('exist')
        cy.get('div span').contains('Sort by').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Sort by').should('exist')
        cy.wait(4000)
        cy.get('.option__row').contains('Sort by Z-A').should('exist')
        cy.get('.MuiCheckbox-colorPrimary').eq(1).should('exist').click()
        cy.get('.button__apply').should('exist').and('contain.text', 'Apply').click()
        cy.get('.title-container').contains('Browse').should('exist')
        cy.get('div span').contains('Sort by').should('exist').click()
        cy.get('.MuiPaper-rounded').contains('Sort by').should('exist')
        cy.get('.option__row').contains('Sort by Z-A').should('exist')
        cy.get('.Mui-checked').should('exist')
    }
    DownloadAppDialog() {
        cy.get('.MuiTypography-body1').contains('Download').should('exist').click()
        cy.get('.dialogContainer').should('exist')
        cy.get('a[href*="https://apps.apple.com/app/"]').should('exist')
        cy.get('a[href*="https://play.google.com/store/apps/details?"]').should('exist')
    }

}
