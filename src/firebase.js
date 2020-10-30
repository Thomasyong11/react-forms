import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDN5ElKyYcseTs80IjUAT3br16RVZQKnxs",
  authDomain: "forms-test-22b20.firebaseapp.com",
  databaseURL: "https://forms-test-22b20.firebaseio.com",
  projectId: "forms-test-22b20",
  storageBucket: "forms-test-22b20.appspot.com",
  messagingSenderId: "693499011586",
  appId: "1:693499011586:web:4a4f589791b83bb09f3d1b",
  measurementId: "G-KYC9CE8W21",
};
firebase.initializeApp(firebaseConfig);

const firebaseDb = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();
export { firebase, firebaseDb, googleAuth };
// firebaseDb.ref("users").set([
//   {
//     id: 1,
//     name: "Tay",
//     lastname: "Jnr",
//   },
//   {
//     id: 2,
//     name: "Lord",
//     lastname: "Awenlue",
//   },
// ]);

// .once("value")
// .then((snapshot) => {
//   console.log(snapshot.val());
//   //to get all the data do not give any reference {ie(ref()) should be empty} use snapshot.val()
// })
// .catch((e) => {
//   console.log(e);
// });

// firebaseDb.ref().set({ Name: "Tay", Lastname: "jnr", age: 20 });
