/* Amplify Params - DO NOT EDIT
	AUTH_AMPLIFYCALENDLYDEMOA51C7064A51C7064_USERPOOLID
Amplify Params - DO NOT EDIT */

let AWS = require("aws-sdk");

exports.handler = async (event) => {
  var input = event.input;
  const COGNITO_CLIENT = new AWS.CognitoIdentityServiceProvider({
    apiVersion: "2016-04-19",
    region: process.env.REGION,
  });

  var poolData = {
    UserPoolId: process.env.AUTH_AMPLIFYCALENDLYDEMOA51C7064A51C7064_USERPOOLID,
    Username: input.inviteEmail,
    DesiredDeliveryMediums: ["EMAIL"],
    TemporaryPassword: input.tempPassword,
    UserAttributes: [
      {
        Name: "email",
        Value: input.inviteEmail,
      },
      {
        Name: "email_verified",
        Value: "false",
      },
    ],
  };
  COGNITO_CLIENT.adminCreateUser(poolData, (error, data) => {
    console.log(error);
    console.log(data);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data),
    });
  });
};
