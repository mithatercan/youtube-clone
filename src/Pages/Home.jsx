import React, { useEffect, useState } from "react";
import uuid from "react-uuid";
import VideoBox from "../Components/Video/VideoBox";
import StyledLinkVideo from "../Components/Buttons/StyledLinkVideo";
import PrevBtn from "../Components/Buttons/PrevBtn";
import NextBtn from "../Components/Buttons/NextBtn";
function Home({ getVideo, data, nextPageCall, prevPageCall, isDisabled }) {
  return (
    <div>
      {data ? (
        <div>
          {data.map((item) => (
            <StyledLinkVideo
              to={{
                pathname: `/watch/q=`,
                search: `${item.id.videoId}`,
                key: `${item.id.videoId}`,
              }}
            >
              <VideoBox onClick={(e) => getVideo(e)} key={uuid()} item={item} />
            </StyledLinkVideo>
          ))}
          <div className="pagination">
            <div className="btns__container">
              <PrevBtn
                disabled={isDisabled}
                prevPageCall={() => prevPageCall()}
              />
              <NextBtn nextPageCall={() => nextPageCall()} />
            </div>
          </div>
        </div>
      ) : (
        <div>Data couldn't fetch</div>
      )}
    </div>
  );
}

export default Home;
