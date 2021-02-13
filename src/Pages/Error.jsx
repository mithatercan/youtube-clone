import React from "react";
import StyledLinkBtn from "../Components/Buttons/StyledLinkBtn";
import Layout from "../Components/Layout/Layout";
function Error() {
  return (
    <Layout>
      <div className="error">
        <h1>404 PAGE NOT FOUND</h1>
        <StyledLinkBtn to="/">GO BACK HOME</StyledLinkBtn>
      </div>
    </Layout>
  );
}

export default Error;
