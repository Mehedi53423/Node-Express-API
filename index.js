const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// Middlewar
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Is Running...!!!");
});

app.listen(port, () => {
  console.log(`Server Is Running On The Port : ${port}`);
});
