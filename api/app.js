// import required packages
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const redis = require("redis");

// express server
const app = express();

// redis client
const client = redis.createClient();
client.on("error", (err) => console.log("Redis Client Error", err));
client.connect();

// request data from omdb
const getData = async (req, res) => {
  const searchTerm = req.query.q;
  const api_URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`;
  await axios
    .get(api_URL)
    .then((response) => {
      res.json(response.data.Search);
    })
    .catch((error) => {
      console.log(error);
      res.status(500);
    });
};

app.get("/api/search", getData);

module.exports = app;
