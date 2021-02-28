import React, { useState, useRef } from 'react';
import {
  useFirebaseApp,
  useFirestore,
  useFirestoreCollectionData,
  useAuth
} from 'reactfire';

import ChatMessage from './ChatMessage';

function ChatRoom() {
  const dummy = useRef();

  const firebase = useFirebaseApp().firebase_;
  const auth = useAuth();
  const messagesRef = useFirestore().collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const messages = useFirestoreCollectionData(query);

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages.data?.map((msg) => (
          <ChatMessage key={msg.NO_ID_FIELD} message={msg} />
        ))}
        <span ref={dummy}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type='submit'>▶</button>
      </form>
    </>
  );
}

export default ChatRoom;
