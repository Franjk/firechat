import React from 'react';
import { useAuth, useFirebaseApp } from 'reactfire';

const SignIn = () => {
  const firebase = useFirebaseApp().firebase_;
  const auth = useAuth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};

export default SignIn;
