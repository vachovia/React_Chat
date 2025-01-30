const express = require("express");
const bodyParser = require("body-parser");

const config = require("./config/app.js");
const router = require('./router')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
