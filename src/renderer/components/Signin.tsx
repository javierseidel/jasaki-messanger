import { Button } from '@mui/material';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

function Signin() {
  function signInGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithRedirect(provider);
  }
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Button onClick={signInGoogle}>Sign in with Google</Button>
    </div>
  );
}

export default Signin;
