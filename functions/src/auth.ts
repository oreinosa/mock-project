import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const db = admin.firestore();

export const createUserRecord = functions.auth
  .user()
  .onCreate((user, context) => {
    const { displayName: name, email, photoURL } = user;

    return db.doc(`users/${user.uid}`).set({
      name,
      email,
      photoURL
    }, { merge: true });

  });
