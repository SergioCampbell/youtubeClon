const express = require("express");
const cors = require("cors");
//const axios = require("axios");
require("dotenv").config();
const { google } = require("googleapis");

const app = express();
const port = 4000;

app.use(cors());
const youtube = google.youtube({
  version: "v3",
  auth: process.env.APIKEY,
});

// https://www.googleapis.com/youtube/v3/search?key=${apikey}&type=video&part=snippet&q=alkioty

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world from server 😎");
});

app.get("/search-with-googleapis", async (req, res, next) => {
  try {
    const searchQuery = req.query.searchQuery;
    const response = await youtube.search.list({
      part: "snippet",
      q: searchQuery,
      type: "video",
    });
    //const title = response.data.items.map((item) => item.snippet.title);
    res.send(response.data.items);
  } catch (error) {
    //next(error)
    console.log("There is an error: ", error);
  }
});

app.listen(port, () => {
  console.log("App is started and running on port: ", port);
});
