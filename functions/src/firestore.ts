import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const db = admin.firestore();

export const gameCount = functions.firestore
  .document('games/{gameId}')
  .onCreate(async (snapshot, context) => {
    const data = snapshot.data();
    if (data) {
      let userRef = db.doc(`users/${data.uid}`);

      const userSnap = await userRef.get();

      const userData = userSnap.data();
      if (userData) {
        return userRef.update({
          gameCount: userData.gameCount + 1
        });
      }
    }
    return await 'error';
  });