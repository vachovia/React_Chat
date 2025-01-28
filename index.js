const express = require('express');

const app = express();

const port = 8000;

app.get('/login', (req, res) => {
    res.send('Home screen');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});