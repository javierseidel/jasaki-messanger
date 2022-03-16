import { Button } from '@mui/material';
import { auth } from '../firebase';

function Signout() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}

export default Signout;
