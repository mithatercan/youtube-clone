import React, { useState, useEffect } from "react";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BiAddToQueue } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import NumberFormat from "react-number-format";
import Video from "../Components/Video/Video";

function Home() {
  const [data, setData] = useState({});
  const [statistics, setStatistics] = useState({});
  const location = useLocation();
  const videoId = location.search
    .split("")
    .slice(1, location.search.length)
    .join("");

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const videoApi = `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${videoId}`;
  const videoStatistics = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(videoApi);
      const responseData = await response.json();
      setData(responseData.items[0].snippet);
      console.log(responseData.items[0]);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchStatisticData = async () => {
      const response = await fetch(videoStatistics);
      const responseData = await response.json();
      setStatistics(responseData.items[0].statistics);
    };

    fetchStatisticData();
  }, []);

  return (
    <div>
      <Video />
      <div className="details">
        <div className="title">{data.title}</div>
        <div className="statistics">
          <div className="view">
            <span>
              <NumberFormat
                value={statistics.viewCount}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>{" "}
            views
          </div>
          <div className="rate">
            <span className="rate-detail">
              <AiFillLike size={24} />

              <NumberFormat
                value={statistics.likeCount}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => <div>{value}</div>}
              />
            </span>

            <span className="rate-detail">
              <AiFillDislike size={24} />
              <NumberFormat
                value={statistics.dislikeCount}
                displayType={"text"}
                thousandSeparator={true}
                renderText={(value) => <div>{value}</div>}
              />

              <span className="share">
                <IoMdShareAlt size={28} />
              </span>

              <span className="add-libary">
                <BiAddToQueue size={22} />
              </span>
            </span>
          </div>
        </div>
        <div className="descriptions">
          <pre>{data.description}</pre>
        </div>
      </div>
    </div>
  );
}

export default Home;
