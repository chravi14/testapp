const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api", (req, res) => {
  return res.json({
    message: "hello world",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error in connecting");
  }
  console.log("Listening on Port ", PORT);
});
