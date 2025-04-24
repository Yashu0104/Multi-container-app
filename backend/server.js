const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  <h1>Hello from the Node.js container!</h1>
  res.send(' YO YO HONEY SINGH ');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
