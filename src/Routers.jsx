import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Layout from "./Components/Layout/Layout";
import Watch from "./Pages/Watch";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Trending from "./Pages/Trending";
import Category from "./Pages/Category";
function Routers({
  userInfo,
  finalClear,
  finalSearch,
  searchData,
  categoryData,
  trendingData,
  nextPageCall,
  prevPageCall,
  isDisabled,
}) {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Layout
            setVideos={(e, searchValue) => finalSearch(e, searchValue)}
            clearData={() => finalClear()}
            openInfo={() => userInfo()}
          >
            <Route exact path="/">
              <Home
                data={searchData}
                nextPageCall={() => nextPageCall()}
                prevPageCall={() => prevPageCall()}
                isDisabled={isDisabled}
              />
            </Route>
            <Route exact path="/watch/*" component={Watch} />
            <Route exact path="/category" component={Category} />
            <Route exact path="/trending">
              <Trending />
            </Route>
          </Layout>
        </Route>
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default Routers;
