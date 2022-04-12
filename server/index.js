const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

db.then(() => console.log("success connect to mongoose"))
  .catch((err) =>console.log("failed connect to mongoose"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json("Welcome to API Pitching APP")
});

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});