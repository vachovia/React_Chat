const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require('http');

const config = require("./config/app.js");
const router = require('./router');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

const port = config.appPort;

const server = http.createServer(app);
const SocketServer = require('./socket');
SocketServer(server);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

