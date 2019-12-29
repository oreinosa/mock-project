import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import { RequestHandler } from 'express';


export const basicHTTP = functions.https.onRequest((request, response) => {
  const name = request.query.name;

  if (!name) {
    return response.status(400).send('ERROR you must supply a name :(');
  }

  return response.send(`hello ${name}`);
});

const auth: RequestHandler = (request, response, next) => {
  if (!request.headers.authorization) {
    response.status(400).send('unauthorized');
  }
  next();
};


const app = express();

app.use(cors({ origin: true }));
app.use(auth);

app.get('/', (req, res) => {
  res.send('henlo');
})

app.get('/cat', (req, res) => {
  res.send('CAT');
});

app.get('/dog', (req, res) => {
  res.send('DOG');
});

export const api = functions.https.onRequest(app);
