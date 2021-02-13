import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #c4c4c4;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  span {
    margin: 0 1.5em;
    color: black;
  }
`;

export default StyledLink;
