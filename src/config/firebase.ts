// firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
apiKey: "AIzaSyBpRkttEC-N9w587bW7phVf5ZwUfyoBlzE",
  authDomain: "d2c-simulator.firebaseapp.com",
  projectId: "d2c-simulator",
  storageBucket: "d2c-simulator.firebasestorage.app",
  messagingSenderId: "398498518727",
  appId: "1:398498518727:web:3a0ceee86cd4d2260dd0e2",
  measurementId: "G-Y6275YT8FB"};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
