import React, { useEffect, useState } from "react";
import ReactFlagsSelect from "react-flags-select";

function Trending({ trendingData, selectCountry }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    console.log(country);
  }, [country]);

  return (
    <div>
      <ReactFlagsSelect
        className="countries"
        selected={country}
        onSelect={(select) => {
          selectCountry(select);
          setCountry(select);
        }}
        placeholder="Select Country"
        fullWidth={false}
      />

      <div className="trending__container">
        {!trendingData ? (
          <h1>Choose a country to see trendings</h1>
        ) : (
          trendingData.map((item) => (
            <iframe
              width="853"
              height="480"
              src={"https://www.youtube.com/embed/" + item.id}
              frameborder="0"
              allowfullscreen
            ></iframe>
          ))
        )}
      </div>
    </div>
  );
}

export default Trending;
