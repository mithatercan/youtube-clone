import React, { useState, useEffect } from "react";
import Routers from "./Routers";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  const [fireRedirect, setFireRedirect] = useState(false);
  const [searchValue, setSearchValue] = useState("most popular videos");
  const [searchData, setSearchData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [pageToken, setPageToken] = useState("");
  const searchValueWithPlus = searchValue.split(" ").join("+");
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const searchAPI = `https://www.googleapis.com/youtube/v3/search?pageToken=${pageToken}&part=snippet&maxResults=50&q=${searchValueWithPlus}&type=video&key=${API_KEY}`;

  // !!SEARCH VIDEOS HERE !!
  function search(e, inputValue) {
    e.preventDefault();
    setSearchValue(inputValue);
    console.log(searchValueWithPlus);
    setFireRedirect(true);
  }

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await fetch(searchAPI);
      const responseData = await response.json();
      console.log(responseData.items);
      setSearchData(responseData.items);
      setNextPage(responseData.nextPageToken);
      setPrevPage(responseData.prevPageToken);
      setFireRedirect(false);
    };

    fetchSearch();
  }, [searchValue, pageToken]);

  if (fireRedirect === true) {
    return (
      <Router>
        <Redirect to="/" />
      </Router>
    );
  }

  // !!! CLEAR SEARCH DATA !!

  const clear = () => {
    setSearchValue("most popular videos");
  };
  //  !! OPEN INFO MODAL!!
  const openInfoModal = () => {
    alert("hey");
  };

  //  !! PAGNITATION

  const nextPageCall = () => {
    setPageToken(nextPage);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const prevPageCall = () => {
    setPageToken(prevPage);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Routers
      userInfo={() => openInfoModal()}
      finalClear={() => clear()}
      finalSearch={(e, inputValue) => search(e, inputValue)}
      searchData={searchData}
      isDisabled={prevPage == undefined ? true : false}
      prevPageCall={() => prevPageCall()}
      nextPageCall={() => nextPageCall()}
    />
  );
}

export default App;
