import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Form from "./components/Form/Form";
import Cards from "./components/Cards/Cards";

function App() {
  const [videos, setVideos] = useState("");
  const [loader, setLoader] = useState(false);
  const [show, setShow] = useState([]);

  const APIURL = `http://localhost:4000/search-with-googleapis?searchQuery=${videos}`;
  const API = 'http://localhost:4000/search-with-googleapis?searchQuery'

  const getVideos = async () => {
    try {
      await axios.get(APIURL || API).then((response) => {
        let all = response.data;
        setShow(all);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const Submit = (e) => {
    e.preventDefault();

    setVideos(videos);

    getVideos();
  };

  useEffect(() => {
    if (videos === "") return;

    getVideos();
  }, []);

  const handleChange = (e) => {
    setVideos(e.target.value);
  };

  return (
    <div className="container">
      
      <Form handleChange={handleChange} Submit={Submit} videos={videos}/>

      <hr />

      <div className="container">
          <Cards show={show}/>
      </div>
    </div>
  );
}

export default App;
