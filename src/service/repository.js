import firebase from "./firebase";

class Repository {
  loadUser(userId, loadData) {
    firebase
      .database()
      .ref(`${userId}/date`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        loadData(data);
      });
  }
  saveData(userId, data) {
    firebase.database().ref(`${userId}/date/}`).set(data);
  }

  deleteData(userId, data) {
    firebase.database().ref(`${userId}/date/`).remove(data);
  }
  updateDate(userId, data) {
    firebase.database().ref(`${userId}/date/`).update(data);
  }
}

export default Repository;
