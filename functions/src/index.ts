import * as admin from 'firebase-admin';

const serviceAccount = require("../service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export { basicHTTP, api } from './http';

export { createUserRecord } from './auth';

export { gameCount } from './firestore';