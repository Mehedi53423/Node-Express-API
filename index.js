const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

const users = [
  { Id: 1, Name: "Mehedi", email: "mehedi@softfybd.com" },
  { Id: 2, Name: "Nabil", email: "nabil@softfybd.com" },
  { Id: 3, Name: "Shanto", email: "shanto@softfybd.com" },
];

// Middlewar
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server Is Running...!!!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server Is Running On The Port : ${port}`);
});
