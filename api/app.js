const express = require("express");
const app = express();
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/search", async (req, res) => {
  const searchTerm = req.query.q;
  const api_URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`;

  await axios
    .get(api_URL)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = app;
