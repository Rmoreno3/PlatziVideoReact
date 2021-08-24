import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({ hello: 'Express' });
});

app.listen(3000, (err) => {
  err ? console.log(err) : console.log('Server running on Port 3000');
});
