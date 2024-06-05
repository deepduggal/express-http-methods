const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/about', (req, res) => {
  res.json({ message: 'This is the about content.' });
});

app.post('/contact', (req, res) => {
  const { body: data, query, params } = req.body;
  res.json({ data, params, query });
});

app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.get('/search', (req, res) => {
  const { q } = req.query;
  res.json({ query: q });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});