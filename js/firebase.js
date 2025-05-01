// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBKeYHm2cFGD_JaXywCTpLykk_Fx8yRy9Y",
  authDomain: "adsweb-ae132.firebaseapp.com",
  projectId: "adsweb-ae132",
  storageBucket: "adsweb-ae132.appspot.com",
  messagingSenderId: "1066730758776",
  appId: "1:1066730758776:web:f8c3f374cfcd1c42a9c38d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
