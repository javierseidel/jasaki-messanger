import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Signin from './components/Signin';
import Chat from './components/Chat';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user] = useAuthState(auth as any);

  return <>{user ? <Chat /> : <Signin />}</>;
}

export default App;
