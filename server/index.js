const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require ('mongoose');

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/apiRoute"));

mongoose.connect("mongodb+srv://aigerim:mongodb123@cluster0.v50d5b9.mongodb.net/APIs_DB");

app.get('/', async(req, res)=>{
  const api_url = 'https://api.publicapis.org/entries';
  const response = await fetch(api_url);
  const data = await response.json();
  res.json(data.entries);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});