const config = require('./config/app.js');
const express = require('express');

const app = express();

app.get('/login', (req, res) => {
    res.send('Home screen');
});

const port = config.appPort;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});