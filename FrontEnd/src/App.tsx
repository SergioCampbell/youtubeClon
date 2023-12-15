import "./App.css";
import { useState, useEffect, useCallback, FormEvent } from "react";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/navbar/navbar";
import { CircularProgress, Grid, Stack } from "@mui/material";
import { Card } from "./interface/card";
import Sidebar from "./components/sidebar/Sidebar";

const DEFAULT_CARD: Card = {
  kind: "",
  etag: "",
  id: {
    kind: "",
    videoId: "",
  },
  snippet: {
    channelTitle: "",
    liveBroadcastContent: "",
    publishTime: "",
    publishedAt: "",
    channelId: "",
    title: "",
    description: "",
    thumbnails: {
      high: {
        url: "",
        width: 0,
        height: 0,
      },
      default: {
        url: "",
        width: 0,
        height: 0,
      },
      medium: {
        url: "",
        width: 0,
        height: 0,
      },
    },
  },
};
function App() {
  const [queryInput, setQueryInput] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [miniCard, setMiniCard] = useState<Card[]>([DEFAULT_CARD]);

  const APIURL = `http://localhost:4000/search-with-googleapis?searchQuery=${queryInput}`;
  const API = "http://localhost:4000/search-with-googleapis?searchQuery";

  const getVideos = useCallback(() => {
    fetch(APIURL || API)
      .then((response) => response.json())
      .then((data) => {
        setMiniCard(data);
        setLoader(false);
      })
      .catch((error) => console.error(error));
  }, [APIURL]);

  const Submit = () => {
    setLoader(true);
    getVideos();
  };

  useEffect(() => {
    if (queryInput === "") return;
  }, [miniCard.length, queryInput]);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setQueryInput(e.currentTarget.value);
  };

  return (
    <>
      <Navbar
        handleChange={handleChange}
        Submit={Submit}
        queryInput={queryInput}
      />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Sidebar />
        <Grid container direction="row" style={{ margin: "5px" }}>
          {loader && (
            <CircularProgress
              sx={{ display: "block", margin: "auto", mt: 5 }}
            />
          )}
          <Grid container spacing={1}>
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              item
            >
              <Cards miniCard={miniCard} />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </>
  );
}

export default App;
