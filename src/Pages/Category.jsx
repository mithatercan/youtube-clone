import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StyledLinkBtn from "../Components/Buttons/StyledLinkBtn";
function CategoryPage() {
  const location = useLocation();

  const search = location.search
    .split("")
    .slice(1, location.search.length)
    .join("");
  console.log(search);

  const [data, setData] = useState([]);
  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&videoCategoryId=${search}&type=video&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API);
      const db = await response.json();
      console.log(db.items);
      setData(db);
    };

    fetchData();
  }, [data]);

  return <div className="category">CATEGORY PAGE</div>;
}

export default CategoryPage;
