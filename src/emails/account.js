const sgMail = require('@sendgrid/mail')

// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'nitin.asthana22@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}

const sendCancelationEmail = (email, name) => {
    const msg = {
        to: email,
        from: 'nitin.asthana22@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    }
    sgMail.send(msg).then(() => {
        console.log('Message sent')
    }).catch((error) => {
        console.log(error.response.body)
        // console.log(error.response.body.errors[0].message)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}