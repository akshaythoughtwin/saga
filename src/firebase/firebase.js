import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcoFDlpreR5GAUx66WWDfgVhYBNdp2p8M",
  authDomain: "crud-saga.firebaseapp.com",
  databaseURL: "https://crud-saga-default-rtdb.firebaseio.com",
  projectId: "crud-saga",
  storageBucket: "crud-saga.appspot.com",
  messagingSenderId: "2992050945",
  appId: "1:2992050945:web:ed4c5cf06c6371cd940100",
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const fireRef = ref(database, "alldata/");
