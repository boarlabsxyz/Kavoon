import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC8mAIUcvd7bqw46bajWEbRrHcDTnd1qTw',
  authDomain: 'flowers-way.firebaseapp.com',
  databaseURL: 'https://flowers-way.firebaseio.com',
  projectId: 'flowers-way',
  storageBucket: 'flowers-way.appspot.com',
  messagingSenderId: '305623494289',
  appId: '1:305623494289:web:fa6954b42047c910079930',
  measurementId: 'G-PSBJYP7E5X',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
