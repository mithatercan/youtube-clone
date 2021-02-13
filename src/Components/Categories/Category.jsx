import React from "react";
import { Link } from "react-router-dom";
function Category({ category, getViaCategory, id }) {
  if (category.snippet.title.length > 10) {
    var width = { minWidth: "200px" };
  }

  return (
    <Link className="main__categories--category" style={width} to="/category">
      {category.snippet.title}
    </Link>
  );
}

export default Category;
