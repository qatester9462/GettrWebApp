export class SignUpPage {
    goToSignUp() {
        cy.get('button .MuiTypography-root.MuiTypography-body1').contains('Sign up').should('be.visible').click()
        cy.contains('Sign Up for GETTR').should('be.visible')
    }
    clickSignupWithEmailPhone() {
        cy.get('.MuiButtonBase-root').contains('Sign Up with Phone or Email').should('be.visible').click()
        cy.get('.MuiTypography-h1').should('be.visible').and('contain.text', 'Sign Up')
        cy.contains('Sign up with email').should('be.visible').wait(1000)
    }
    signupWithEmail(email, month, day, year) {
        cy.contains('Sign up with email').should('be.visible').click()
        if (email != null) {
            cy.get('input[id="email"]').should('be.visible').type(email)
        }

        cy.get('#birthmonth').should('be.visible').click()
        cy.get('.MuiPaper-root').should('be.visible').contains(month).click()
        cy.get('#birthday').should('be.visible').click()
        cy.get('.MuiPaper-root').should('be.visible').contains(day).click()
        cy.get('#birthyear').should('be.visible').click()
        cy.get('.MuiPaper-root').should('be.visible').contains(year).click()
        cy.get('button[type="submit"]').should('be.visible').and('contain.text', 'Next').click({ force: true })
        //cy.get('.Toastify__toast-body').should('be.visible').and('contain.text','Verification code sent. Please check your eamil.')

    }
    //uisng Yopmail
    /* goToYopmail(clientEmail) {
         cy.visit('https://yopmail.com/')
         cy.get('.titinput').should('be.visible').and('contain.text', 'Type the Email name of your choice')
         cy.wait(4000)
         cy.get('[placeholder="Enter your inbox here"]').should('exist').clear().type(clientEmail)
         cy.wait(5000)
         cy.get('[title="Check Inbox @yopmail.com"]').should('be.visible').click({ force: true })
         cy.get('.wminbox').should('be.visible').wait(3000)
     }
     verifyYopmailEmail(clientEmail, maxAttempts, count=0) {
         if (count > maxAttempts) {
             console.log('Max retries reached. No email is received for new user registration')
             console.log('Trying to get the verification link from DB')
             this.verifyEmailFromDb(clientEmail)
             return
         }
        // cy.log('Try Count',+ count)
        cy.getIframeBody('iframe[name="ifinbox"]').then(body => {
             if (!body.text().includes('ChargeAutomation: Verify Your Email Address')) { // Email not found
                 cy.log('Email not found. Retrying...')
                 cy.get('button#refresh').should('be.visible').click() // Refresh
                 cy.wait(7000) // Wait before retrying
                 this.verifyYopmailEmail(clientEmail, maxAttempts, count+1 ) // Retry
             } else { 
         cy.getIframeBody('iframe[name="ifmail"]').then(mailBody => {
             cy.wrap(mailBody).should('be.visible')
                 .and('contain.text', 'Please confirm your email address for GETTR by entering the verification code below. The code is valid for 30 minutes.')
                 .invoke('text')
                 .then(text => {
                     const verificationCode = text.match(/\d{6}/)[0];
                     cy.wrap(verificationCode).as('verificationCode')
                     cy.log(verificationCode)
                 })
             })
         }*/

    //GuerrilaMail
    goToGuerrillaMail(clientEmail) {
        cy.visit('https://www.guerrillamail.com/inbox').wait(3000)
        cy.get('[title="Click to Edit"]').should('be.visible').click().wait(1000)
        cy.get('[class="editable button edit-in-progress"]').should('be.visible').type(clientEmail).wait(2000)
        cy.get('[class="save button small"]').should('be.visible').should('contain.text', 'Set').click().wait(2000) //set
    }
    verifyGuerrillaMail(clientEmail, maxAttempts, count = 1) {
        if (count > maxAttempts) {
            console.error('Max retries reached. No email is received for new user registration')
            return
        }

        cy.log('Try Count: ' + count)

        cy.get('.mail_row').contains('is your verification code from GETTR').if().then((email) => {
            cy.wrap(email).click()
            cy.get('span[style="font-family:Helvetica;font-size:22px;"]').should('be.visible').invoke('text').then(code => {
                cy.wrap(code).as('verificationCode')
            })
        })
            .else().then(() => {
                cy.wait(11000)
                this.verifyGuerrillaMail(clientEmail, maxAttempts, count + 1)
            })
    }
    verifyEmailConfirmation(clientEmail, maxAttempts, count = 1) {
        if (count > maxAttempts) {
            console.error('Max retries reached. No email is received for new user registration')
            return
        }

        cy.log('Try Count: ' + count)

        cy.get('.mail_row').contains('Welcome to Guerrilla Mail').if().then((email) => {
            cy.wrap(email).click()
            cy.get('.email_body').should('be.visible').and('contain.text', 'Your disposable email address has been created ready for use.')
        })
            .else().then(() => {
                cy.wait(11000)
                this.verifyMail(clientEmail, maxAttempts, count + 1)
            })
    }


    otpVerification(clientEmail, verificationCode) {
        cy.get('[class*=" MuiTypography-h1"]').should('be.visible').and('contain.text', 'Verification') //heading
        cy.contains('Enter your verification code').should('be.visible')
        cy.contains('We sent a verification code to ').should('be.visible').and('contain.text', clientEmail)

        const verificationCodeArray = verificationCode.split('')
        // Loop through each character and type it into the corresponding input field
        verificationCodeArray.forEach((char, index) => {
            //cy.get('input').eq(index).should('be.visible').type(char); // Target the input field by index
            cy.get('[class*="styles_react-code-input_"] [data-id="' + index + '"]').type(parseInt([char]))
        })

        cy.contains("Didn't receive code?").should('be.visible')
        cy.get('[class="sendAgainText"]').should('be.visible').and('contain.text', 'Send again')
    }
    CreateUsernameAndPassword(username, password) {

        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', 'Code Verified.')
        cy.get('.MuiTypography-root.MuiTypography-h1').contains('Create username and password').should('be.visible')
        cy.get('#username').should('be.visible').type(username)
        cy.get('#password-new').should('be.visible').type(password)
        cy.get('.MuiButtonBase-root').should('be.visible').and('contain.text', 'Start exploring').click({ force: true })

    }
    validateToast(message) {
        cy.get('.Toastify__toast-body').should('be.visible').and('contain.text', message)
    }
    gotoInterests() {
        cy.url().should('include', '/step_interest')
        cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12').contains('Skip').should('be.visible').click()


    }
    validateError(message) {
        cy.get('.MuiFormHelperText-root').should('be.visible').and('contain.text', message)
    }
    validateEmailError(error) {
        cy.get('.MuiFormHelperText-root.Mui-error').should('be.visible').and('contain.text', error)
    }
}


