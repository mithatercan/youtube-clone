import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkVideo = styled(Link)`
  text-decoration: none;
  border-radius: 20px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: black;
    font-size: 20px;
  }
  * {
    margin-bottom: 0.8em;
    margin-left: 0.6em;
    color: gray;
    font-size: 15px;
  }
`;

export default StyledLinkVideo;
