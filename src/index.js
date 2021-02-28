import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyB3HXGtiOIYb9EAXUK0osUuAIBtSPUxKtU',
  authDomain: 'fir-superchat-6ad11.firebaseapp.com',
  projectId: 'fir-superchat-6ad11',
  storageBucket: 'fir-superchat-6ad11.appspot.com',
  messagingSenderId: '663554768694',
  appId: '1:663554768694:web:2b7b4e18d7e97d5e543d97',
  measurementId: 'G-J5M4TJ715R'
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
