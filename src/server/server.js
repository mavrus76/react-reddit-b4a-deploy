import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import compression from 'compression';
import helmet from 'helmet';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();

if (!IS_DEV) {
  app.use(compression());
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
}

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=https://reactredditb4adeploy4-mav76rus.b4a.run/`,
      {
        auth: {
          username: process.env.CLIENT_ID,
          password: process.env.SECRET,
        },
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      res.send(
        indexTemplate(ReactDOM.renderToString(App()), data.access_token),
      );
    })
    .catch(console.log);
});

app.get('*', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
