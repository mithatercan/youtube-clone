import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import VideoBox from "../Components/Video/VideoBox";
import StyledLinkVideo from "../Components/Buttons/StyledLinkVideo";
function Home({ getVideo, data, addToHistory }) {
  const [state, setState] = useState([]);

  return (
    <div>
      {data.map((item) => (
        <StyledLinkVideo
          // onClick={() => addToHistory()}
          to={{
            pathname: `/watch/q=`,
            search: `${item.id.videoId}`,
            key: `${item.id.videoId}`,
          }}
        >
          <VideoBox onClick={(e) => getVideo(e)} key={uuid()} item={item} />
        </StyledLinkVideo>
      ))}
      <div id="bottom"></div>
    </div>
  );
}

export default Home;
