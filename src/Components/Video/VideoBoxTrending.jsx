import React from "react";

function VideoBoxTrending({ item }) {
  const shortenedDescription = item.snippet.description
    .split(" ")
    .splice(0, 15)
    .join(" ");

  return (
    <div className="main__video" to={"/videos/search?q="}>
      <div className="main__video--inner">
        <img src={item.snippet.thumbnails.medium.url} alt="" />
        <div className="video-component__main">
          <h3>{item.snippet.title}</h3>
          <span>
            <p>{item.snippet.channelTitle}</p>
            <p>{item.snippet.publishAt}</p>
          </span>
          <p>{shortenedDescription + "..."}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBoxTrending;
