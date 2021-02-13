import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLinkBtn = styled(Link)`
  display: flex;
  align-items: center;
  color: #c4c4c4;
  background-color: #030303;
  text-decoration: none;
  padding: 0.5em 2em;
  border-radius: 20px;
  span {
    margin: 0 1.5em;
    color: black;
  }
`;

export default StyledLinkBtn;
