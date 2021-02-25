import React, { useState, useEffect } from "react";

function VideoBox({ item }) {
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
          <p>{item.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoBox;
