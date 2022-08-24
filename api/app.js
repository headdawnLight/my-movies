// import required packages
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const redis = require("redis");

// express server
const app = express();

// redis client on connect
let redisClient;

(async () => {
  redisClient = redis.createClient();

  redisClient.on("error", (error) => console.error(`Error : ${error}`));

  await redisClient.connect();
})();

// fetch data from omdb api
async function fetchApiData(searchTerm) {
  const apiResponse = await axios.get(
    `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.OMDB_API_KEY}`
  );
  console.log("Request sent to the API");
  return apiResponse.data;
}

// get movies data from omdb api
async function getMoviesData(req, res) {
  const searchTerm = req.query.q;
  let searchQuery;

  try {
    searchQuery = await fetchApiData(searchTerm);
    if (searchQuery.length === 0) {
      throw "API returned an empty array";
    }
    await redisClient.set(searchTerm, JSON.stringify(searchQuery), {
      EX: 300,
      NX: true,
    });

    res.send({
      fromCache: false,
      results: searchQuery,
    });
  } catch (error) {
    console.error(error);
    res.status(404).send("Data unavailable");
  }
}

// cache middleware
async function cacheData(req, res, next) {
  const searchTerm = req.query.q;
  let searchQuery;
  try {
    const cacheQuery = await redisClient.get(searchTerm);
    if (cacheQuery) {
      searchQuery = JSON.parse(cacheQuery);
      res.send({
        fromCache: true,
        results: searchQuery,
      });
    } else {
      next();
    }
  } catch (error) {
    console.error(error);
    res.status(404);
  }
}

app.get("/api/search", cacheData, getMoviesData);

module.exports = app;
