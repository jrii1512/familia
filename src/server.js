// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const routes = require("./router/index");
// eslint-disable-next-line no-undef
const cors = require("cors");

//const bodyParser = require("body-parser");

const port = 4000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// eslint-disable-next-line no-undef
module.exports = app;
