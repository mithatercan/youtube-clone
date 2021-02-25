import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import VideoBoxTrending from "../Components/Video/VideoBoxTrending";
import StyledLinkVideo from "../Components/Buttons/StyledLinkVideo";

import uuid from "react-uuid";

function Trending({ trendingData, selectCountry, getVideo }) {
  const [country, setCountry] = useState("TR");

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div>
      <ReactFlagsSelect
        className="countries"
        countries={["TR", "AZ", "GE", "US", "DE"]}
        selected={country}
        onSelect={(select) => {
          selectCountry(select);
          setCountry(select);
        }}
        placeholder="Select Country"
        fullWidth={false}
        searchable={true}
      />

      <div className="trending__container">
        {!trendingData || trendingData === undefined ? (
          <h1>Choose a country to see trendings</h1>
        ) : (
          trendingData.map((item) => (
            <StyledLinkVideo
              to={{
                pathname: `/watch/q=`,
                search: `${item.id}`,
                key: `${item.id}`,
              }}
            >
              <VideoBoxTrending
                onClick={(e) => getVideo(e)}
                key={uuid()}
                item={item}
              />
            </StyledLinkVideo>
          ))
        )}
      </div>
    </div>
  );
}

export default Trending;
