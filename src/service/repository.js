import firebase from "./firebase";

class Repository {
  async loadUser(userId, loadData) {
    await firebase
      .database()
      .ref(`${userId}/date`)
      .on("value", (snapshot) => {
        const data = snapshot.val();
        loadData(data);
      });
  }
  async saveData(userId, date) {
    await firebase.database().ref(`${userId}/date`).set(date);
  }

  deleteData(userId, data) {
    firebase.database().ref(`${userId}/date/`).remove(data);
  }
  updateDate(userId, data) {
    firebase.database().ref(`${userId}/date/`).update(data);
  }
}

export default Repository;
