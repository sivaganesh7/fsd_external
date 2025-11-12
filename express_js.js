const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.get('/search', (req, res) => {
  const city = req.query.city || 'Bhimavaram';
  const age = req.query.age || '20';
  res.send(`You searched for city: ${city}, age: ${age}`);
});

app.get('/build', (req, res) => {
  const homeURL = `${req.protocol}://${req.get('host')}/`;
  const userURL = `${req.protocol}://${req.get('host')}/user/Siva`;
  const searchURL = `${req.protocol}://${req.get('host')}/search?city=Vijayawada&age=22`;

  res.send(`
    <h3>URL Building Example</h3>
    <p>Home URL: ${homeURL}</p>
    <p>User URL: ${userURL}</p>
    <p>Search URL: ${searchURL}</p>
  `);
});

// Run server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
