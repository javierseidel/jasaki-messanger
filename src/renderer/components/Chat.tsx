import { useCollectionData } from 'react-firebase-hooks/firestore';
import { db } from 'renderer/firebase';
import Signout from './Signout';
import ChatMessage from './ChatMessage';

function Chat() {
  const messagesRef = db.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  return (
    <div>
      <Signout />
      <div>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
      </div>
    </div>
  );
}

export default Chat;
