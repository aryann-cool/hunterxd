import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
const auth = getAuth();

export async function signUpUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function loginUser(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
