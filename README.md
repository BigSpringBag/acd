Do this then restart shell
```bash
echo "alias amp='amplify'" >> ~/.bash_profile
```


Userful commands

```bash
npm i

amp init
# just read the instructions
amp add auth
amp add api
# source the schema.graphql in the root
amp push

amp remove <option>

amp delete # only use it when you want to flip the table, Amplify Cli is infested with bugs
```

if you really want to flip the table like i did, ```amp delete``` then remove the following
- amplify/#current-cloud-backend
- amplify/.config/local-aws-info.json
- amplify/.config/local-env-info.json
- amplify/team-provider-info.json
- amplify/backend/amplify-meta.json


TO-DO:

prerequisites: Amplify Cli basics

NOTE: Once auth is pushed, update to auth may result in errors for the following. So config excepted attributes before push.

1. Case insensitive 
    > Restric user from creating account like Tao@tao.com and tao@tao.com
    - Amplify CLI does not provide generic config for this. In order to do this, in amplify/backend/auth/{UserPoolName}/{UserPoolName}-cloudformation-template.yml
    add the following to the UserPool properties
    ```
        UsernameConfiguration:
            CaseSensitive: false
    ```
    eg.
    ```
    Resources:
        UserPool:
            Properties:
                ...
                UsernameConfiguration:
                    CaseSensitive: false
                
    ```
    tao@tao.com already exists in the user pool

    <img src="./readmeimg/caseinsensitivetesting.png" width="300" alt="Case Insensitive Testing">

    Source: https://github.com/aws-amplify/amplify-cli/issues/3494 (*monitor this issue, as it might be closed when option added to Amplify Cli)

2. Change password length: (default 8)
    > Apply password policy during sign up
    - There are two ways to do this:
        1. From Amplify CLI, select the following when prompt
        ``` 
            Do you want to use the default authentication and security configuration? - Manual configuration
            .
            .
            .
            Do you want to override the default password policy for this User Pool? - Yes
            Enter the minimum password length for this User Pool: 10
        ```
        2. Directly change config from amplify/backend/auth/{UserPoolName}/parameters.json
        ```
            "passwordPolicyMinLength": "10"
        ```
    
3. Add user to default group on postConfirmation (with Amplify Cli)
    > Add user to a default group, such as "user" group 
    - Configure this part from the CLI
    ```
        Do you want to use the default authentication and security configuration? - Manual configuration
        .
        .
        .
        Do you want to enable any of the following capabilities? - Add User to Group
        ...
        ? Do you want to configure Lambda Triggers for Cognito? - Yes
        ? Which triggers do you want to enable for Cognito - Post Confirmation
        ? What functionality do you want to use for Post Confirmation - Add User To Group
        ? Enter the name of the group to which users will be added. - user
    ```
    Now you able to see a function created for you to add-to-group with post confirmation trigger at amplify/backend/function/{UserPoolName}PostConfirmation/src/add-to-group.js
    The actual trigger is at amplify/backend/function/{UserPoolName}PostConfirmation/function-parameters.json
    But the config is at amplify/team-provider-info.json

4. Add admin query for Cognito user pool
    > Allow admin to manage user pool by calling admin query
    - Configure this part from the Cli
    ```
        Do you want to use the default authentication and security configuration? Manual configuration
        .
        .
        .
        Do you want to add an admin queries API? Yes
        ? Do you want to restrict access to the admin queries API to a specific Group Yes
        ? Select the group to restrict access with: admin
        .
        .
        .
    ```
    All the admin query function are added for you.
    (there are some package have security issues, need to fix them)

5. Create Custom Resource in Amplify Cli
    
    In order to use some of the tools that Amplify Cli does not offer at the current time, use Custom CloudFormation Stacks in Amplify Cli. This just a short version and tips & tricks of the actual documentation.
    
    Doc: https://docs.amplify.aws/cli/usage/customcf

    Steps:
    1.  Create the placeholder file by following structure
        > NOTE: 
        > > CF TEMPLATE NAME MUST BE UNIQUE
        > > 
        > > Prepend Custom Resource Name with Custom Project Name
        
        ```
        amplify
            \backend
                \<custom-category-name>
                    \<custom-resource-name>
                        parameters.json 
                        <category name>-<resource name>-template.json 
        ```
    
    2. Update amplify/backend/backend-config.json 
        > this will hint Amplify that you created something
        ```json
            {
                .
                .
                .
            	"<custom-category-name>": {
                    "<custom-resource-name>": {
                        "service": "<custom-aws-service-name>", # can be anything
                        "providerPlugin": "awscloudformation"
                    }
                }
            }
        ```
    
    3. Write the actual CloudFormation template
        > NOTE: You must add the following to the Parameters section
        ```json
            "Parameters": {

                "CloudWatchRule": {

                    "Type": "String",

                    "Default": "NONE",

                    "Description": " Schedule Expression"

                },

                "env": {

                    "Type": "String"

                }

            },
        ```
        Or it will result in the following message
        ```
        CREATE_FAILED workflowsimpleStepFunctions AWS::CloudFormation::Stack Wed Aug 19 2020 08:43:17 GMT-0400 (Eastern Daylight Time) Parameter values specified for a template which does not require them.
        ```
    
    4. Put your parameters in parameters.json

        ```parameters.json``` is a json file of parameters that will be passed to the cloudformation template
        - in ```parameters.json```
            ```json
                {
                    "key":"value"
                }
            ```
        - in ```<category name>-<resouce name>-template.json```
            ```json
                "Parameters": {
                    
                    "key": {
                        "Type": "String",
                        "Default": "",
                        "Description": "something"
                    },
            ```

    5. Deploy what you just wrote
        - Run ```amp env checkout dev``` populate the CLI runtime files and make it aware of the newly added custom resources
        - Then ```amp push```
    
    6. Reference other resource
        > In ``` parameters.json ``` (Don't forget the ```Outputs.```)
        ```json
            {
                "authmycognitoresourceUserPoolId": {  // The format out here is `<category><resource-name><attribute-name>` - we have defined all of these in the `backend-config.json` file above
                    "Fn::GetAtt": [
                        "authmycognitoresource",  // check `amplify status` to find resource name in the category auth
                        "Outputs.UserPoolId"
                    ]
                }
            }
        ```
        
        > In the CloudFormation template
        ```json
            "Parameters": {
            // Rest of the parameters

                "authmycognitoresourceUserPoolId": { // The format out here is `<category><resource-name><attribute-name>` - we have defined all of these in the `backend-config.json` file above
                    "Type": "String"
                }
            },
        ```

6. Create SNS & SQS, SQS is the subscriber of SNS
    - Follow 5.6 on how to get SQS arn for SQS in it's subscription section
    - When adding definetion in backend-config.json, make sure the creation of SNS is dependsOn SQS, so you don't create a race condition.

7. Lambda function send SNS & SQS

    Function permission

        ```json
            "LambdaExecutionRole": {
                "Type": "AWS::IAM::Role",
                "Properties": {
                    "RoleName": {
                        ...
                    },
                    "AssumeRolePolicyDocument": {
                        ...
                    },
                    "Policies": [
                        {
                            "PolicyName": "allowSQSRead",
                            "PolicyDocument": {
                                "Version": "2012-10-17",
                                "Statement": [
                                    {
                                        "Effect": "Allow",
                                        "Action": [
                                            "sqs:ReceiveMessage",
                                            "sqs:DeleteMessage",
                                            "sqs:GetQueueAttributes",
                                            "sqs:ChangeMessageVisibility"
                                        ],
                                        "Resource": {
                                            "Ref": "sqsacdSendSQSSqsArn"
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ```
        If added policy directly to role, you don't have to write ```DependsOn``` 

8. Step Functions
    step function intro: https://medium.com/@serverlessguru/aws-step-functions-a-users-guide-f8d313dfdfeb
    Good Reference for email (i think he steal from here): https://serverlessfirst.com/serverless-email-scheduler/

    - input / output
        To reference any thing from the input
        ```json
            // input:
                { 
                    "a" : [ 1, 2, 3, 4 ],
                    "b" : "B",
                    "c" : { "d" : "D" }
                }
            
            // to reference any variable from input, let's say we want b in this case
                "$.b" // return "B"
            // you can also do range
                "$.a[1:2]" // return [ 2, 3 ]
            // get something nested
                "$.c.d" // return "D"
            
        ```



TO-DO list:

    Two resources SNS, and SQS.
        SQS will be a subscriber of SNS, which means it will receive the message that SNS publishes.
    Two λ functions:
        One function to send a message to SNS
        A second function to be triggered when a message is received by SQS (queue).
    Two workflows:
        Send an email with delay
            Will receive parameters: {email: {to, subject, htmlBody, textBody}, dueDate}
            Will wait until TimestampPath matches dueDate to invoke a lambda function, which will send an email
            Workflow will pass the above mentioned parameters to a lambda function
            fromEmail (email address) will be hard-coded within a lambda function
        Send an SMS
            Will receive parameters {phoneNumber, message}
            Workflow will publish SMS message to SNS
    Another λ function to trigger/execute SendEmail workflow. This function will pass all needed parameters to a workflow aka StateMachine
    Ahh, and yet another function to execute SendSMS workflow... 


NOTE: 

-   sometime ```amp push``` does not detect changes, change something in the function (somewhere critical), then ```amp push``` again.
