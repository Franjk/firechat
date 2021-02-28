import './App.css';

import 'firebase/firestore';
import 'firebase/auth';
import { useUser } from 'reactfire';

import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

function App() {
  const { data: user } = useUser();

  return (
    <div className='App'>
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
