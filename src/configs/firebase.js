import firebase from "firebase/app";
import "firebase/firestaore";

const configFirebase = {};

const app = firebase.initializeApp(configFirebase);

export function getFirestore() {
  return firebase.firestore(app);
}
