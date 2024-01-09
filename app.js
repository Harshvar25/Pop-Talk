import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const API_URL = "https://www.goodreads.com"

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index'); // assuming your EJS file is named 'index.ejs'
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
