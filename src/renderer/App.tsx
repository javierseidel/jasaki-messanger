import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import Chat from './components/Chat';
import Signin from './components/Signin';

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user] = useAuthState(auth as any);

  return <>{user ? <Chat /> : <Signin />}</>;
}

export default App;
