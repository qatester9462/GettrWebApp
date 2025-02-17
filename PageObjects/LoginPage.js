export class LoginPage {
    goToLogin() {
        cy.get('[class^="jss"] > .MuiTypography-root').contains('Log In').should('be.visible').click() //Log In menu
        cy.url().should('include', '/login')
        cy.get('.defaultLoaderWrapper').should('not.exist')
        cy.get('[class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6"] [class^="jss"] > :nth-child(1)').should('be.visible') //Logo
        cy.get('.MuiTypography-root > a').should('be.visible').and('contain.text', 'Help') //Help icon
        cy.get('[class*="MuiTypography-h1"]').should('be.visible').and('contain.text', 'Log In to GETTR') //heading

        cy.get('[id="dividerContainer"] span').contains('Log in with your social media').should('be.visible')
        cy.get('[id="dividerContainer"] span').contains('Or').should('be.visible')
        cy.get('[id="dividerContainer"] span').contains('Or log in with').should('be.visible')
    }
    loginWithEmailPassword(email, password) {
        cy.get('[class="form notranslate"] span').contains('Log in with email or username').should('be.visible').click() //Log in with email or username
        cy.get('[class="form notranslate"]').should('contain.text', 'Email or username') //heading
        if (email != null) {
            cy.get('[class="form notranslate"] [id="email"]').should('be.visible').type(email).should('contain.value', email)
        }
        if (password != null) {
            cy.get('[class="form notranslate"] [id="password"]').should('be.visible').type(password).should('contain.value', password)
        }

        cy.get('.MuiBox-root > .MuiButtonBase-root').should('be.visible').and('contain.text', 'Log In').click({ force: true }) //Login 
    }
    loginWithPhone(phone) {
        cy.get('[class="form notranslate"] span').contains('Log in with email or username').should('be.visible') //Log in with email or username
        cy.get('[class="form notranslate"]').should('contain.text', 'Phone') //heading
        if (phone != null) {
            cy.get('.login-form-input [type="tel"]').should('be.visible').type(phone)
        }
        
        cy.get('.MuiBox-root > .MuiButtonBase-root').should('be.visible').and('contain.text', 'Log In').click({ force: true }) //Login 
    }
    validateError(message) {
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain.text', message)
    }
    validateLoginButton(status) {
        if (status == 'enabled') {
            cy.get('.MuiBox-root > .MuiButtonBase-root').should('be.enabled').and('contain.text', 'Log In')
        }
        if (status == 'disabled') {
            cy.get('.MuiBox-root > .MuiButtonBase-root').should('be.disabled').and('contain.text', 'Log In')
        }

    }
    forgotPassword(loginEmail) {
        cy.get('[class="form notranslate"] span').contains('Log in with email or username').should('be.visible').click() //Log in with email or username
        cy.get('[class="form notranslate"]').should('contain.text', 'Email or username') //heading
        cy.get('[class="form notranslate"] span[class*="text-link"]').should('be.visible').and('contain.text', 'Forgot password?').click()
        cy.contains('Reset Password').should('be.visible') //heading
        cy.get('[class*="MuiBox-root "]').contains('Reset password with email').click() //link
        cy.contains('Please enter your email address').should('be.visible') //heading
        cy.contains('We’ll send you a verification code.').should('be.visible')
        cy.get('[id="email"]').should('be.visible').type(loginEmail).should('contain.value', loginEmail)
        cy.get('.MuiButton-containedPrimary').should('be.visible').and('contain.text', 'Send Code').click() //Send Code
    }
    otpVerification(loginEmail, otp) {
        cy.get('[class*=" MuiTypography-h1"]').should('be.visible').and('contain.text', 'Verification') //heading
        cy.contains('Enter your verification code').should('be.visible')
        cy.contains('We sent a verification code to ').should('be.visible').and('contain.text', loginEmail)
        for (let i = 0; i < otp.length; i++) {
            // Target the input field for each OTP digit
            cy.get(`input[data-id="${i}"]`).should('be.visible').type(otp[i])
        }

        cy.contains("Didn't receive code?").should('be.visible')
        cy.get('[class="sendAgainText"]').should('be.visible').and('contain.text', 'Send again')
    }
    clickLoginWithQR() {
        cy.get('button.MuiButtonBase-root').contains('Log In with QR Code').should('be.visible').click() //Log In with QR Code
    }
    validateQRmodal() {
        cy.get('[role="dialog"]').should('be.visible')
        cy.get('[role="dialog"] div').contains('Log in with QR code').should('be.visible') //heading
        cy.get('[role="dialog"] div [src*="auth/v2/qrcode/"]').should('be.visible') //QR should be visible
        cy.get('[role="dialog"] div').contains('Open the GETTR app on your mobile device').should('be.visible')
        cy.get('[role="dialog"] div').contains('On timeline').should('be.visible')
        cy.get('[role="dialog"] div').contains('tap your avatar on the upper left hand corner').should('be.visible')
        cy.get('[role="dialog"] div').contains('Tap').should('be.visible')
        cy.get('[role="dialog"] div').contains('and scan the QR code to confirm your login').should('be.visible')

        cy.get('[role="dialog"] div').contains(`Don't have an account?`).should('be.visible')
        cy.get('[role="dialog"] div [class="text-link"]').should('be.visible').and('contain.text', 'Sign up')

    }
    closeQRModal(){
        cy.get('[role="dialog"] svg[viewBox="0 0 48 48"]').should('be.visible').click() //Cross icon
    }

    //yopmail
    goToYopmail(clientEmail) {
        cy.visit('https://yopmail.com/')
        cy.get('.titinput').should('be.visible').and('contain.text', 'Type the Email name of your choice')
        cy.wait(4000)
        cy.get('[placeholder="Enter your inbox here"]').should('exist').clear().type(clientEmail)
        cy.wait(5000)
        cy.get('[title="Check Inbox @yopmail.com"]').should('be.visible').click({ force: true })
        cy.get('.wminbox').should('be.visible').wait(3000)
    }
    verifyYopmailEmail(clientEmail, maxAttempts, count = 1) {
        if (count > maxAttempts) {
            console.log('Max retries reached. No email is received for new user registration')
            console.log('Trying to get the verification link from DB')
            this.verifyEmailFromDb(clientEmail)
            return
        }

        cy.log('Try Count: ' + count)
        cy.getIframeBody('iframe[name="ifinbox"]').then(body => {
            if (!body.text().includes('ChargeAutomation: Verify Your Email Address')) { // Email not found
                cy.log('Email not found. Retrying...')
                cy.get('button#refresh').should('be.visible').click() // Refresh
                cy.wait(7000) // Wait before retrying
                this.verifyYopmailEmail(clientEmail, maxAttempts, count + 1) // Retry
            } else { // Email found
                cy.getIframeBody('iframe[name="ifmail"]').then(mailBody => {
                    cy.wrap(mailBody)
                        .find('a[href*=".chargeautomation.com/securelink/"]')
                        .should('be.visible')
                        .and('contain.text', 'Verify Now')
                        .then($link => {
                            const href = $link.attr('href')
                            cy.log('Navigating to:', href)
                            cy.visit(href) // Visit the verification link
                            cy.url().should('include', '/login')
                            cy.get('.alert').should('be.visible').and('contain.text', 'Verified Successfully')
                        })
                })
            }
        })
    }
//GuerrilaMail
    goToGuerrillaMail(clientEmail) {
        cy.visit('https://www.guerrillamail.com/inbox').wait(3000)
        cy.get('[title="Click to Edit"]').should('be.visible').click().wait(1000)
        cy.get('[class="editable button edit-in-progress"]').should('be.visible').type(clientEmail).wait(2000)
        cy.get('[class="save button small"]').should('be.visible').should('contain.text', 'Set').click().wait(2000) //set
    }
    verifyGuerrillaMail(clientEmail, maxAttempts, count = 1) {
        if (count > maxAttempts) {
            console.log('Max retries reached. No email is received for new user registration')
            console.log('Trying to get the verification link from DB')
            this.verifyEmailFromDb(clientEmail)
            return
        }

        cy.log('Try Count: ' + count)
        cy.get('.mail_row').contains('ChargeAutomation: Verify Your Email Address')
            .if().then((clientemail)=> {
                cy.wrap(clientemail).click()
                cy.get('a[href*=".chargeautomation.com/securelink/"]').should('be.visible').and('contain.text', 'Verify Now').then($link => {
                    // Get the href attribute of the link
                    const href = $link.attr('href')
                    cy.log('Navigating to:', href)
                    cy.visit(href) // Verify link
                    cy.url().should('include', '/login')
                    cy.get('.alert').should('be.visible').and('contain.text', 'Verified Successfully')
                })
            })
            .else().then(() => {
                cy.wait(11000)
                this.verifyGuerrillaMail(clientEmail, maxAttempts, count + 1)
            })
           
    }

    CreatePassword(password){
        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Code Verified.')
        cy.get('.MuiTypography-root.MuiTypography-h1').contains('Create password').should('be.visible')  
        cy.get('#password-new').should('be.visible').type(password) 
        cy.get('button[type="submit"]').should('be.enabled').and('contain.text','Create password').click()
        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Password updated')
        
    }
}