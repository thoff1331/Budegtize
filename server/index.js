const express = require("express");
const app = express();
const { numberToRoman } = require("./controller");

// Basic Node server to hit the endpont
// and run the result through the numberToRoman function
// and then sending that result to the front end to be displayed

app.use(express.json());
app.get("/romannumeral/:integer", numberToRoman);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
