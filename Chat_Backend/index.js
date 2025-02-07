const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const config = require("./config/app.js");
const router = require('./router')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

app.use(express.static(__dirname + '/public'));

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
