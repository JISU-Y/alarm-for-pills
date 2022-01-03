import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyARRoWebxx9BpiNCypqN67zIuXvMBOMtBA',
  authDomain: 'pillmanager-7bbee.firebaseapp.com',
  projectId: 'pillmanager-7bbee',
  storageBucket: 'pillmanager-7bbee.appspot.com',
  messagingSenderId: '1096244858623',
  appId: '1:1096244858623:web:28a5bf4dbb43d82cc446ca',
}

// Initialize Firebase
initializeApp(firebaseConfig)

export const db = getFirestore()
