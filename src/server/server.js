import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
}

app.get('*', (req, res) => {
  res.send({ hello: 'Express' });
});

app.listen(PORT, (err) => {
  err
    ? console.log(err)
    : console.log(`Server running on https://localhost:${PORT}`);
});
