import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Video() {
  const location = useLocation();

  const search = location.search
    .split("")
    .slice(1, location.search.length)
    .join("");
  console.log(search);
  return (
    <iframe
      width="853"
      height="480"
      src={"https://www.youtube.com/embed/" + search}
      frameborder="0"
      allowfullscreen
    ></iframe>
  );
}

export default Video;
