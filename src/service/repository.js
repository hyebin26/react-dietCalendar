import { firebaseDatabase } from "./firebase";

class Repository {
  async loadUser(userId, loadData) {
    await firebaseDatabase.ref(`date/${userId}`).on("value", (snapshot) => {
      const data = snapshot.val();
      loadData(data);
    });
  }
  async saveData(userId, date) {
    await firebaseDatabase.ref(`date/${userId}`).update(date);
  }
}

export default Repository;
