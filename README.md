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

TO-DO:

prerequisites: Amplify Cli basics

NOTE: Once auth is pushed, update to auth may result in errors for the following. So config excepted attributes before push.

1. Case insensitive
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

2. Change password length: (default 8)
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
    
3. Post confirmation -> put user into group (with Amplify CLI)
    - Configure this part from the CLI
    ```
        Do you want to use the default authentication and security configuration? - Manual configuration
        .
        .
        .
        Do you want to enable any of the following capabilities? - Add User to Group
        ...
        ? Do you want to configure Lambda Triggers for Cognito? Yes
        ? Which triggers do you want to enable for Cognito - Post Confirmation
        ? What functionality do you want to use for Post Confirmation - Add User To Group
        ? Enter the name of the group to which users will be added. (You can leave this blank, as it depends on your logic)
        ? Do you want to edit your add-to-group function now? Yes
    ```
    Now you able to see a function created for you to add-to-group with post confirmation trigger at amplify/backend/function/{UserPoolName}PostConfirmation/src/add-to-group.js