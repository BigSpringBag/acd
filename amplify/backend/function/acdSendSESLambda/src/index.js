const AWS = require('aws-sdk');
const ses = new AWS.SES();
const senderEmail = require("./emailAddress.json").senderEmail

module.exports.handle = async (event) => {
    console.log(event)
    const result = await sendEmail(event.email);
    console.log('Sent email successfully', result);
    return result;
};

function sendEmail(email) {
    const params = {
        Destination: {
            ToAddresses: email.to,
        },
        Message: {
            Subject: {
                Data: email.subject,
            },
            Body: {
                Html: {
                    Data: email.htmlBody || email.textBody,
                },
                Text: {
                    Data: email.textBody || email.htmlBody,
                },
            },
        },
        Source: senderEmail,
    };
    return ses.sendEmail(params).promise();
}