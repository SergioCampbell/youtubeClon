import { Router } from "express";
const routers = Router();
const { google } = require('googleapis');

import { indexVideo } from "../controllers/controller";

const youtube = google.youtube({
    version: 'v3',
    auth: process.env.APIKEY,
})

//index || home
routers.get('/', indexVideo)

routers.get("/", (req, res) => {
    res.send("This is home");
  });
  
  routers.get("/search-with-googleapis", async (req, res, next) => {
    try {
      const searchQuery = req.query.searchQuery;
      const response = await youtube.search.list({
          part: 'snippet',
          q: searchQuery,
          type: 'video',
  
      })
      const title = response.data.items.map((item) => item.snippet.title);
      res.send(title);
    } catch (error) {
      next(error)
    }
  });

  export default routes;