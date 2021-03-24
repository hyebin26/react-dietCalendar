import { firebaseDatabase } from "./firebase";

class Repository {
  async loadUser(userId, loadData) {
    await firebaseDatabase.ref(`${userId}/date`).on("value", (snapshot) => {
      const data = snapshot.val();
      loadData(data);
    });
  }
  async saveData(userId, date) {
    await firebaseDatabase.ref(`${userId}/date`).set(date);
  }

  deleteData(userId, data) {
    firebaseDatabase.ref(`${userId}/date/`).remove(data);
  }
  updateDate(userId, data) {
    firebaseDatabase.ref(`${userId}/date/`).update(data);
  }
}

export default Repository;
