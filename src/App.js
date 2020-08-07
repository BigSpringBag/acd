import React, { useState, useEffect } from "react";
import './App.css';
import Amplify from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsconfig from './aws-exports';
import Button from './Button';

import CandidateInfo from './CandidateInfo';

Amplify.configure(awsconfig);

const AuthStateApp = () => {
    const [authState, setAuthState] = React.useState();
    const [user, setUser] = React.useState();

    React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            setAuthState(nextAuthState);
            setUser(authData)
        });
    }, []);

    const [showOverlay, updateOverlayVisibility] = useState(false);
  
  return authState === AuthState.SignedIn && user ? (
      <div className="App">
          <div>Hello, {user.username}</div>
          <Button title="My Info" onClick={() => updateOverlayVisibility(true)} />
          {console.log(user)}
          <AmplifySignOut />
          { showOverlay && (
          <CandidateInfo
            updateOverlayVisibility={updateOverlayVisibility}
            // updatePosts={setPostState}
            // posts={posts}
          />
        )}
          {/* <CandidateInfo /> */}
      </div>
    ) : (
      <AmplifyAuthenticator />
  );
}

export default AuthStateApp;