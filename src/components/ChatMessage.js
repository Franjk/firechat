import React from 'react';
import { useAuth } from 'reactfire';

const ChatMessage = (props) => {
  const auth = useAuth();
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img
        src={
          photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
        alt='profile'
      />
      <p>{text}</p>
    </div>
  );
};

export default ChatMessage;
