import firebase from "./firebase";

class Repository {
  firebaseRepository(userId, date) {
    firebase.database().ref(`${userId}/date/${date}`).set(date);
  }
}

export default Repository;
