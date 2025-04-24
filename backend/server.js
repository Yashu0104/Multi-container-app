const express = require('express');
const app = express();
const port = 3000;

// Serve static files (optional, if you add CSS/JS later)
app.use(express.static('public'));

// Route to serve a basic HTML page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Multi-Container App</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 50px; text-align: center; }
            h1 { color: #333; }
            p { font-size: 1.2rem; color: #666; }
        </style>
    </head>
    <body>
        <h1>Welcome to the Multi-Container App</h1>
        <p>This is a sample web app served using Node.js and Express inside a Docker container.</p>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
