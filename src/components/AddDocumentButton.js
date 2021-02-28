import React from 'react';
import { useFirestore } from 'reactfire';

const AddDocumentButton = () => {
  const firestore = useFirestore();

  function addDocument() {
    firestore.collection('messages').doc('myCustomID').set({
      text: 'hello2',
      id: 'num1'
    });
  }
  return (
    <div>
      <button onClick={addDocument}>Add document</button>
    </div>
  );
};

export default AddDocumentButton;
