import { database } from "../../firebase";

export const getUserDataFunc = async (setUserData, email) => {
  await database.users
    .where("email", "==", email)
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) =>
        setUserData({ id: doc.id, ...doc.data() })
      );
    });
};
