import React from 'react';
import { useAuth } from 'reactfire';

const SignOut = () => {
  const auth = useAuth();
  return (
    auth.currentUser && <button onClick={() => auth.signOut()}>Sign Out</button>
  );
};

export default SignOut;
