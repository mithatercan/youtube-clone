import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import VideoBox from "../Components/Video/VideoBox";
import StyledLinkVideo from "../Components/Buttons/StyledLinkVideo";
function Home({ getVideo }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("api.mocki.io/v1/17652818");
      const responseData = await response.json();
      console.log(responseData.items);
      setState(responseData.items);
    };

    fetchData();
  }, []);

  return state.map((item) => (
    <StyledLinkVideo
      to={{
        pathname: `/watch/q=`,
        search: `${item.id.videoId}`,
        key: `${item.id.videoId}`,
      }}
    >
      <VideoBox onClick={(e) => getVideo(e)} key={uuid()} item={item} />
    </StyledLinkVideo>
  ));
}

export default Home;
