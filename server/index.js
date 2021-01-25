const express = require("express");
const app = express();
const { numberToRoman } = require("./controller");

app.use(express.json());
app.get("/romannumeral", numberToRoman);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
