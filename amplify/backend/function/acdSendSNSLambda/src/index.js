

var AWS = require("aws-sdk");

exports.handler = async function(event, context) {
    var sns = new AWS.SNS();
    var params = {
        Message: JSON.stringify(event.message), 
        Subject: JSON.stringify(event.subject),
        TopicArn: process.env.SNSTopic
    };
    await sns.publish(params, context.done);
};